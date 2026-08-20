# `devopsagentAssociation` Submodule <a name="`devopsagentAssociation` Submodule" id="@cdktn/provider-awscc.devopsagentAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentAssociation <a name="DevopsagentAssociation" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association awscc_devopsagent_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociation(scope: Construct, id: string, config: DevopsagentAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig">DevopsagentAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig">DevopsagentAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetLinkedAssociationIds">resetLinkedAssociationIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration"></a>

```typescript
public putConfiguration(value: DevopsagentAssociationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a>

---

##### `resetLinkedAssociationIds` <a name="resetLinkedAssociationIds" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetLinkedAssociationIds"></a>

```typescript
public resetLinkedAssociationIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsagentAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isConstruct"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

devopsagentAssociation.DevopsagentAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformElement"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

devopsagentAssociation.DevopsagentAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformResource"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

devopsagentAssociation.DevopsagentAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

devopsagentAssociation.DevopsagentAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DevopsagentAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsagentAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsagentAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference">DevopsagentAssociationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceIdInput">agentSpaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configurationInput">configurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIdsInput">linkedAssociationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceId">agentSpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIds">linkedAssociationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configuration"></a>

```typescript
public readonly configuration: DevopsagentAssociationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference">DevopsagentAssociationConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `agentSpaceIdInput`<sup>Optional</sup> <a name="agentSpaceIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceIdInput"></a>

```typescript
public readonly agentSpaceIdInput: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configurationInput"></a>

```typescript
public readonly configurationInput: IResolvable | DevopsagentAssociationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a>

---

##### `linkedAssociationIdsInput`<sup>Optional</sup> <a name="linkedAssociationIdsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIdsInput"></a>

```typescript
public readonly linkedAssociationIdsInput: string[];
```

- *Type:* string[]

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceId"></a>

```typescript
public readonly agentSpaceId: string;
```

- *Type:* string

---

##### `linkedAssociationIds`<sup>Required</sup> <a name="linkedAssociationIds" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIds"></a>

```typescript
public readonly linkedAssociationIds: string[];
```

- *Type:* string[]

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentAssociationConfig <a name="DevopsagentAssociationConfig" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfig: devopsagentAssociation.DevopsagentAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.agentSpaceId">agentSpaceId</a></code> | <code>string</code> | The unique identifier of the AgentSpace. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a></code> | The configuration that directs how AgentSpace interacts with the given service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.serviceId">serviceId</a></code> | <code>string</code> | The identifier for the associated service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.linkedAssociationIds">linkedAssociationIds</a></code> | <code>string[]</code> | Set of linked association IDs for parent-child relationships. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.agentSpaceId"></a>

```typescript
public readonly agentSpaceId: string;
```

- *Type:* string

The unique identifier of the AgentSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#agent_space_id DevopsagentAssociation#agent_space_id}

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.configuration"></a>

```typescript
public readonly configuration: DevopsagentAssociationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a>

The configuration that directs how AgentSpace interacts with the given service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#configuration DevopsagentAssociation#configuration}

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The identifier for the associated service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#service_id DevopsagentAssociation#service_id}

---

##### `linkedAssociationIds`<sup>Optional</sup> <a name="linkedAssociationIds" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.linkedAssociationIds"></a>

```typescript
public readonly linkedAssociationIds: string[];
```

- *Type:* string[]

Set of linked association IDs for parent-child relationships.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#linked_association_ids DevopsagentAssociation#linked_association_ids}

---

### DevopsagentAssociationConfiguration <a name="DevopsagentAssociationConfiguration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfiguration: devopsagentAssociation.DevopsagentAssociationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a></code> | AWS association for 'monitor' account. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a></code> | Azure subscription integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.dynatrace">dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a></code> | Dynatrace monitoring configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.eventChannel">eventChannel</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a></code> | EventChannelconfiguration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitHub">gitHub</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a></code> | GitHub repository integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitLab">gitLab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a></code> | GitLab project integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServer">mcpServer</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a></code> | MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerDatadog">mcpServerDatadog</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a></code> | Datadog MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerGrafana">mcpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a></code> | Grafana MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerNewRelic">mcpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a></code> | NewRelic MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSigV4">mcpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a></code> | SigV4-authenticated MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSplunk">mcpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a></code> | Splunk MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.pagerDuty">pagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a></code> | PagerDuty integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a></code> | ServiceNow integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a></code> | Slack workspace integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.sourceAws">sourceAws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a></code> | AWS association for 'source' account. |

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.aws"></a>

```typescript
public readonly aws: DevopsagentAssociationConfigurationAws;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a>

AWS association for 'monitor' account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#aws DevopsagentAssociation#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.azure"></a>

```typescript
public readonly azure: DevopsagentAssociationConfigurationAzure;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a>

Azure subscription integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#azure DevopsagentAssociation#azure}

---

##### `dynatrace`<sup>Optional</sup> <a name="dynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.dynatrace"></a>

```typescript
public readonly dynatrace: DevopsagentAssociationConfigurationDynatrace;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a>

Dynatrace monitoring configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#dynatrace DevopsagentAssociation#dynatrace}

---

##### `eventChannel`<sup>Optional</sup> <a name="eventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.eventChannel"></a>

```typescript
public readonly eventChannel: DevopsagentAssociationConfigurationEventChannel;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a>

EventChannelconfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#event_channel DevopsagentAssociation#event_channel}

---

##### `gitHub`<sup>Optional</sup> <a name="gitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitHub"></a>

```typescript
public readonly gitHub: DevopsagentAssociationConfigurationGitHub;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a>

GitHub repository integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#git_hub DevopsagentAssociation#git_hub}

---

##### `gitLab`<sup>Optional</sup> <a name="gitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitLab"></a>

```typescript
public readonly gitLab: DevopsagentAssociationConfigurationGitLab;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a>

GitLab project integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#git_lab DevopsagentAssociation#git_lab}

---

##### `mcpServer`<sup>Optional</sup> <a name="mcpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServer"></a>

```typescript
public readonly mcpServer: DevopsagentAssociationConfigurationMcpServer;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a>

MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#mcp_server DevopsagentAssociation#mcp_server}

---

##### `mcpServerDatadog`<sup>Optional</sup> <a name="mcpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerDatadog"></a>

```typescript
public readonly mcpServerDatadog: DevopsagentAssociationConfigurationMcpServerDatadog;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a>

Datadog MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#mcp_server_datadog DevopsagentAssociation#mcp_server_datadog}

---

##### `mcpServerGrafana`<sup>Optional</sup> <a name="mcpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerGrafana"></a>

```typescript
public readonly mcpServerGrafana: DevopsagentAssociationConfigurationMcpServerGrafana;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a>

Grafana MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#mcp_server_grafana DevopsagentAssociation#mcp_server_grafana}

---

##### `mcpServerNewRelic`<sup>Optional</sup> <a name="mcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerNewRelic"></a>

```typescript
public readonly mcpServerNewRelic: DevopsagentAssociationConfigurationMcpServerNewRelic;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a>

NewRelic MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#mcp_server_new_relic DevopsagentAssociation#mcp_server_new_relic}

---

##### `mcpServerSigV4`<sup>Optional</sup> <a name="mcpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSigV4"></a>

```typescript
public readonly mcpServerSigV4: DevopsagentAssociationConfigurationMcpServerSigV4;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a>

SigV4-authenticated MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#mcp_server_sig_v4 DevopsagentAssociation#mcp_server_sig_v4}

---

##### `mcpServerSplunk`<sup>Optional</sup> <a name="mcpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSplunk"></a>

```typescript
public readonly mcpServerSplunk: DevopsagentAssociationConfigurationMcpServerSplunk;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a>

Splunk MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#mcp_server_splunk DevopsagentAssociation#mcp_server_splunk}

---

##### `pagerDuty`<sup>Optional</sup> <a name="pagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.pagerDuty"></a>

```typescript
public readonly pagerDuty: DevopsagentAssociationConfigurationPagerDuty;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a>

PagerDuty integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#pager_duty DevopsagentAssociation#pager_duty}

---

##### `serviceNow`<sup>Optional</sup> <a name="serviceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.serviceNow"></a>

```typescript
public readonly serviceNow: DevopsagentAssociationConfigurationServiceNow;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a>

ServiceNow integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#service_now DevopsagentAssociation#service_now}

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.slack"></a>

```typescript
public readonly slack: DevopsagentAssociationConfigurationSlack;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a>

Slack workspace integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#slack DevopsagentAssociation#slack}

---

##### `sourceAws`<sup>Optional</sup> <a name="sourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.sourceAws"></a>

```typescript
public readonly sourceAws: DevopsagentAssociationConfigurationSourceAws;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a>

AWS association for 'source' account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#source_aws DevopsagentAssociation#source_aws}

---

### DevopsagentAssociationConfigurationAws <a name="DevopsagentAssociationConfigurationAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationAws: devopsagentAssociation.DevopsagentAssociationConfigurationAws = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountId">accountId</a></code> | <code>string</code> | AWS Account Id corresponding to provided resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountType">accountType</a></code> | <code>string</code> | Account Type 'monitor' for DevOpsAgent monitoring. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.assumableRoleArn">assumableRoleArn</a></code> | <code>string</code> | Role ARN to be assumed by DevOpsAgent to operate on behalf of customer. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.resources">resources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>[]</code> | List of AWS resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>[]</code> | List of AWS tags as key-value pairs. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

AWS Account Id corresponding to provided resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}

---

##### `accountType`<sup>Optional</sup> <a name="accountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountType"></a>

```typescript
public readonly accountType: string;
```

- *Type:* string

Account Type 'monitor' for DevOpsAgent monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#account_type DevopsagentAssociation#account_type}

---

##### `assumableRoleArn`<sup>Optional</sup> <a name="assumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.assumableRoleArn"></a>

```typescript
public readonly assumableRoleArn: string;
```

- *Type:* string

Role ARN to be assumed by DevOpsAgent to operate on behalf of customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#assumable_role_arn DevopsagentAssociation#assumable_role_arn}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.resources"></a>

```typescript
public readonly resources: IResolvable | DevopsagentAssociationConfigurationAwsResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>[]

List of AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.tags"></a>

```typescript
public readonly tags: IResolvable | DevopsagentAssociationConfigurationAwsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>[]

List of AWS tags as key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#tags DevopsagentAssociation#tags}

---

### DevopsagentAssociationConfigurationAwsResources <a name="DevopsagentAssociationConfigurationAwsResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationAwsResources: devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceArn">resourceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceMetadata">resourceMetadata</a></code> | <code>string</code> | Additional metadata for the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceType">resourceType</a></code> | <code>string</code> | Resource type. |

---

##### `resourceArn`<sup>Optional</sup> <a name="resourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#resource_arn DevopsagentAssociation#resource_arn}

---

##### `resourceMetadata`<sup>Optional</sup> <a name="resourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceMetadata"></a>

```typescript
public readonly resourceMetadata: string;
```

- *Type:* string

Additional metadata for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#resource_metadata DevopsagentAssociation#resource_metadata}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#resource_type DevopsagentAssociation#resource_type}

---

### DevopsagentAssociationConfigurationAwsTags <a name="DevopsagentAssociationConfigurationAwsTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationAwsTags: devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}.

---

### DevopsagentAssociationConfigurationAzure <a name="DevopsagentAssociationConfigurationAzure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationAzure: devopsagentAssociation.DevopsagentAssociationConfigurationAzure = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Azure subscription ID corresponding to provided resources. |

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Azure subscription ID corresponding to provided resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#subscription_id DevopsagentAssociation#subscription_id}

---

### DevopsagentAssociationConfigurationDynatrace <a name="DevopsagentAssociationConfigurationDynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationDynatrace: devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.envId">envId</a></code> | <code>string</code> | Dynatrace environment id. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.resources">resources</a></code> | <code>string[]</code> | List of Dynatrace resources to monitor. |

---

##### `enableWebhookUpdates`<sup>Optional</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `envId`<sup>Optional</sup> <a name="envId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

Dynatrace environment id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#env_id DevopsagentAssociation#env_id}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

List of Dynatrace resources to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}

---

### DevopsagentAssociationConfigurationEventChannel <a name="DevopsagentAssociationConfigurationEventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationEventChannel: devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |

---

##### `enableWebhookUpdates`<sup>Optional</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

### DevopsagentAssociationConfigurationGitHub <a name="DevopsagentAssociationConfigurationGitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationGitHub: devopsagentAssociation.DevopsagentAssociationConfigurationGitHub = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.owner">owner</a></code> | <code>string</code> | Repository owner. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.ownerType">ownerType</a></code> | <code>string</code> | Type of repository owner. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoId">repoId</a></code> | <code>string</code> | Associated Github repo ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoName">repoName</a></code> | <code>string</code> | Associated Github repo name. |

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Repository owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#owner DevopsagentAssociation#owner}

---

##### `ownerType`<sup>Optional</sup> <a name="ownerType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.ownerType"></a>

```typescript
public readonly ownerType: string;
```

- *Type:* string

Type of repository owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#owner_type DevopsagentAssociation#owner_type}

---

##### `repoId`<sup>Optional</sup> <a name="repoId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoId"></a>

```typescript
public readonly repoId: string;
```

- *Type:* string

Associated Github repo ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#repo_id DevopsagentAssociation#repo_id}

---

##### `repoName`<sup>Optional</sup> <a name="repoName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoName"></a>

```typescript
public readonly repoName: string;
```

- *Type:* string

Associated Github repo name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#repo_name DevopsagentAssociation#repo_name}

---

### DevopsagentAssociationConfigurationGitLab <a name="DevopsagentAssociationConfigurationGitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationGitLab: devopsagentAssociation.DevopsagentAssociationConfigurationGitLab = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.instanceIdentifier">instanceIdentifier</a></code> | <code>string</code> | GitLab instance identifier. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectId">projectId</a></code> | <code>string</code> | GitLab numeric project ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectPath">projectPath</a></code> | <code>string</code> | Full GitLab project path (e.g., namespace/project-name). |

---

##### `enableWebhookUpdates`<sup>Optional</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `instanceIdentifier`<sup>Optional</sup> <a name="instanceIdentifier" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.instanceIdentifier"></a>

```typescript
public readonly instanceIdentifier: string;
```

- *Type:* string

GitLab instance identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#instance_identifier DevopsagentAssociation#instance_identifier}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

GitLab numeric project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#project_id DevopsagentAssociation#project_id}

---

##### `projectPath`<sup>Optional</sup> <a name="projectPath" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectPath"></a>

```typescript
public readonly projectPath: string;
```

- *Type:* string

Full GitLab project path (e.g., namespace/project-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#project_path DevopsagentAssociation#project_path}

---

### DevopsagentAssociationConfigurationMcpServer <a name="DevopsagentAssociationConfigurationMcpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationMcpServer: devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.description">description</a></code> | <code>string</code> | The description of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.endpoint">endpoint</a></code> | <code>string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.name">name</a></code> | <code>string</code> | The name of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.tools">tools</a></code> | <code>string[]</code> | List of MCP tools that can be used with the association. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}

---

##### `enableWebhookUpdates`<sup>Optional</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.tools"></a>

```typescript
public readonly tools: string[];
```

- *Type:* string[]

List of MCP tools that can be used with the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}

---

### DevopsagentAssociationConfigurationMcpServerDatadog <a name="DevopsagentAssociationConfigurationMcpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationMcpServerDatadog: devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.description">description</a></code> | <code>string</code> | The description of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.endpoint">endpoint</a></code> | <code>string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.name">name</a></code> | <code>string</code> | The name of the MCP server. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}

---

##### `enableWebhookUpdates`<sup>Optional</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}

---

### DevopsagentAssociationConfigurationMcpServerGrafana <a name="DevopsagentAssociationConfigurationMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationMcpServerGrafana: devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.endpoint">endpoint</a></code> | <code>string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.tools">tools</a></code> | <code>string[]</code> | List of tool categories to enable for the Grafana MCP server. |

---

##### `enableWebhookUpdates`<sup>Optional</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.tools"></a>

```typescript
public readonly tools: string[];
```

- *Type:* string[]

List of tool categories to enable for the Grafana MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}

---

### DevopsagentAssociationConfigurationMcpServerNewRelic <a name="DevopsagentAssociationConfigurationMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationMcpServerNewRelic: devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.accountId">accountId</a></code> | <code>string</code> | New Relic Account ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.endpoint">endpoint</a></code> | <code>string</code> | MCP server endpoint URL (e.g., https://mcp.newrelic.com/mcp/). |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

New Relic Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

MCP server endpoint URL (e.g., https://mcp.newrelic.com/mcp/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

### DevopsagentAssociationConfigurationMcpServerSigV4 <a name="DevopsagentAssociationConfigurationMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationMcpServerSigV4: devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4.property.tools">tools</a></code> | <code>string[]</code> | List of MCP tools available for the association. |

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4.property.tools"></a>

```typescript
public readonly tools: string[];
```

- *Type:* string[]

List of MCP tools available for the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}

---

### DevopsagentAssociationConfigurationMcpServerSplunk <a name="DevopsagentAssociationConfigurationMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationMcpServerSplunk: devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.description">description</a></code> | <code>string</code> | The description of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.endpoint">endpoint</a></code> | <code>string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.name">name</a></code> | <code>string</code> | The name of the MCP server. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}

---

##### `enableWebhookUpdates`<sup>Optional</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}

---

### DevopsagentAssociationConfigurationPagerDuty <a name="DevopsagentAssociationConfigurationPagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationPagerDuty: devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.customerEmail">customerEmail</a></code> | <code>string</code> | Email to be used in PagerDuty API header. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.services">services</a></code> | <code>string[]</code> | List of PagerDuty service IDs available for the association. |

---

##### `customerEmail`<sup>Optional</sup> <a name="customerEmail" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.customerEmail"></a>

```typescript
public readonly customerEmail: string;
```

- *Type:* string

Email to be used in PagerDuty API header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#customer_email DevopsagentAssociation#customer_email}

---

##### `enableWebhookUpdates`<sup>Optional</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

List of PagerDuty service IDs available for the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#services DevopsagentAssociation#services}

---

### DevopsagentAssociationConfigurationServiceNow <a name="DevopsagentAssociationConfigurationServiceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationServiceNow: devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.instanceId">instanceId</a></code> | <code>string</code> | ServiceNow instance ID. |

---

##### `enableWebhookUpdates`<sup>Optional</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

ServiceNow instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#instance_id DevopsagentAssociation#instance_id}

---

### DevopsagentAssociationConfigurationSlack <a name="DevopsagentAssociationConfigurationSlack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationSlack: devopsagentAssociation.DevopsagentAssociationConfigurationSlack = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.transmissionTarget">transmissionTarget</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a></code> | Transmission targets for agent notifications. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceId">workspaceId</a></code> | <code>string</code> | Associated Slack workspace ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceName">workspaceName</a></code> | <code>string</code> | Associated Slack workspace name. |

---

##### `transmissionTarget`<sup>Optional</sup> <a name="transmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.transmissionTarget"></a>

```typescript
public readonly transmissionTarget: DevopsagentAssociationConfigurationSlackTransmissionTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a>

Transmission targets for agent notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#transmission_target DevopsagentAssociation#transmission_target}

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Associated Slack workspace ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#workspace_id DevopsagentAssociation#workspace_id}

---

##### `workspaceName`<sup>Optional</sup> <a name="workspaceName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceName"></a>

```typescript
public readonly workspaceName: string;
```

- *Type:* string

Associated Slack workspace name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#workspace_name DevopsagentAssociation#workspace_name}

---

### DevopsagentAssociationConfigurationSlackTransmissionTarget <a name="DevopsagentAssociationConfigurationSlackTransmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationSlackTransmissionTarget: devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget.property.incidentResponseTarget">incidentResponseTarget</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a></code> | Destination for IncidentResponse agent. |

---

##### `incidentResponseTarget`<sup>Optional</sup> <a name="incidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget.property.incidentResponseTarget"></a>

```typescript
public readonly incidentResponseTarget: DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

Destination for IncidentResponse agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#incident_response_target DevopsagentAssociation#incident_response_target}

---

### DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget <a name="DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget: devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelId">channelId</a></code> | <code>string</code> | Slack channel ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelName">channelName</a></code> | <code>string</code> | Slack channel name. |

---

##### `channelId`<sup>Optional</sup> <a name="channelId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

Slack channel ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#channel_id DevopsagentAssociation#channel_id}

---

##### `channelName`<sup>Optional</sup> <a name="channelName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

Slack channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#channel_name DevopsagentAssociation#channel_name}

---

### DevopsagentAssociationConfigurationSourceAws <a name="DevopsagentAssociationConfigurationSourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationSourceAws: devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountId">accountId</a></code> | <code>string</code> | AWS Account Id corresponding to provided resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountType">accountType</a></code> | <code>string</code> | Account Type 'source' for DevOpsAgent monitoring. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.assumableRoleArn">assumableRoleArn</a></code> | <code>string</code> | Role ARN to be assumed by DevOpsAgent to operate on behalf of customer. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.resources">resources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>[]</code> | List of AWS resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>[]</code> | List of AWS tags as key-value pairs. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

AWS Account Id corresponding to provided resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}

---

##### `accountType`<sup>Optional</sup> <a name="accountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountType"></a>

```typescript
public readonly accountType: string;
```

- *Type:* string

Account Type 'source' for DevOpsAgent monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#account_type DevopsagentAssociation#account_type}

---

##### `assumableRoleArn`<sup>Optional</sup> <a name="assumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.assumableRoleArn"></a>

```typescript
public readonly assumableRoleArn: string;
```

- *Type:* string

Role ARN to be assumed by DevOpsAgent to operate on behalf of customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#assumable_role_arn DevopsagentAssociation#assumable_role_arn}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.resources"></a>

```typescript
public readonly resources: IResolvable | DevopsagentAssociationConfigurationSourceAwsResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>[]

List of AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.tags"></a>

```typescript
public readonly tags: IResolvable | DevopsagentAssociationConfigurationSourceAwsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>[]

List of AWS tags as key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#tags DevopsagentAssociation#tags}

---

### DevopsagentAssociationConfigurationSourceAwsResources <a name="DevopsagentAssociationConfigurationSourceAwsResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationSourceAwsResources: devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceArn">resourceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceMetadata">resourceMetadata</a></code> | <code>string</code> | Additional metadata for the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceType">resourceType</a></code> | <code>string</code> | Resource type. |

---

##### `resourceArn`<sup>Optional</sup> <a name="resourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#resource_arn DevopsagentAssociation#resource_arn}

---

##### `resourceMetadata`<sup>Optional</sup> <a name="resourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceMetadata"></a>

```typescript
public readonly resourceMetadata: string;
```

- *Type:* string

Additional metadata for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#resource_metadata DevopsagentAssociation#resource_metadata}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#resource_type DevopsagentAssociation#resource_type}

---

### DevopsagentAssociationConfigurationSourceAwsTags <a name="DevopsagentAssociationConfigurationSourceAwsTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

const devopsagentAssociationConfigurationSourceAwsTags: devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentAssociationConfigurationAwsOutputReference <a name="DevopsagentAssociationConfigurationAwsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountType">resetAccountType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAssumableRoleArn">resetAssumableRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResources` <a name="putResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putResources"></a>

```typescript
public putResources(value: IResolvable | DevopsagentAssociationConfigurationAwsResources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putResources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | DevopsagentAssociationConfigurationAwsTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetAccountType` <a name="resetAccountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountType"></a>

```typescript
public resetAccountType(): void
```

##### `resetAssumableRoleArn` <a name="resetAssumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAssumableRoleArn"></a>

```typescript
public resetAssumableRoleArn(): void
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList">DevopsagentAssociationConfigurationAwsResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList">DevopsagentAssociationConfigurationAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountTypeInput">accountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArnInput">assumableRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountType">accountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArn">assumableRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resources"></a>

```typescript
public readonly resources: DevopsagentAssociationConfigurationAwsResourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList">DevopsagentAssociationConfigurationAwsResourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tags"></a>

```typescript
public readonly tags: DevopsagentAssociationConfigurationAwsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList">DevopsagentAssociationConfigurationAwsTagsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `accountTypeInput`<sup>Optional</sup> <a name="accountTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountTypeInput"></a>

```typescript
public readonly accountTypeInput: string;
```

- *Type:* string

---

##### `assumableRoleArnInput`<sup>Optional</sup> <a name="assumableRoleArnInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArnInput"></a>

```typescript
public readonly assumableRoleArnInput: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: IResolvable | DevopsagentAssociationConfigurationAwsResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DevopsagentAssociationConfigurationAwsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `accountType`<sup>Required</sup> <a name="accountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountType"></a>

```typescript
public readonly accountType: string;
```

- *Type:* string

---

##### `assumableRoleArn`<sup>Required</sup> <a name="assumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArn"></a>

```typescript
public readonly assumableRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationAws;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a>

---


### DevopsagentAssociationConfigurationAwsResourcesList <a name="DevopsagentAssociationConfigurationAwsResourcesList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.get"></a>

```typescript
public get(index: number): DevopsagentAssociationConfigurationAwsResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationAwsResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>[]

---


### DevopsagentAssociationConfigurationAwsResourcesOutputReference <a name="DevopsagentAssociationConfigurationAwsResourcesOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceArn">resetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceMetadata">resetResourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceArn` <a name="resetResourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceArn"></a>

```typescript
public resetResourceArn(): void
```

##### `resetResourceMetadata` <a name="resetResourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceMetadata"></a>

```typescript
public resetResourceMetadata(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceType"></a>

```typescript
public resetResourceType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadataInput">resourceMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadata">resourceMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `resourceMetadataInput`<sup>Optional</sup> <a name="resourceMetadataInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadataInput"></a>

```typescript
public readonly resourceMetadataInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `resourceMetadata`<sup>Required</sup> <a name="resourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadata"></a>

```typescript
public readonly resourceMetadata: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationAwsResources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>

---


### DevopsagentAssociationConfigurationAwsTagsList <a name="DevopsagentAssociationConfigurationAwsTagsList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.get"></a>

```typescript
public get(index: number): DevopsagentAssociationConfigurationAwsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationAwsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>[]

---


### DevopsagentAssociationConfigurationAwsTagsOutputReference <a name="DevopsagentAssociationConfigurationAwsTagsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationAwsTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>

---


### DevopsagentAssociationConfigurationAzureOutputReference <a name="DevopsagentAssociationConfigurationAzureOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationAzure;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a>

---


### DevopsagentAssociationConfigurationDynatraceOutputReference <a name="DevopsagentAssociationConfigurationDynatraceOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnableWebhookUpdates">resetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnvId">resetEnvId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableWebhookUpdates` <a name="resetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnableWebhookUpdates"></a>

```typescript
public resetEnableWebhookUpdates(): void
```

##### `resetEnvId` <a name="resetEnvId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnvId"></a>

```typescript
public resetEnvId(): void
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdatesInput">enableWebhookUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envIdInput">envIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envId">envId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableWebhookUpdatesInput`<sup>Optional</sup> <a name="enableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdatesInput"></a>

```typescript
public readonly enableWebhookUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `envIdInput`<sup>Optional</sup> <a name="envIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envIdInput"></a>

```typescript
public readonly envIdInput: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationDynatrace;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a>

---


### DevopsagentAssociationConfigurationEventChannelOutputReference <a name="DevopsagentAssociationConfigurationEventChannelOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resetEnableWebhookUpdates">resetEnableWebhookUpdates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableWebhookUpdates` <a name="resetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resetEnableWebhookUpdates"></a>

```typescript
public resetEnableWebhookUpdates(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdatesInput">enableWebhookUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableWebhookUpdatesInput`<sup>Optional</sup> <a name="enableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdatesInput"></a>

```typescript
public readonly enableWebhookUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationEventChannel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a>

---


### DevopsagentAssociationConfigurationGitHubOutputReference <a name="DevopsagentAssociationConfigurationGitHubOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwnerType">resetOwnerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoId">resetRepoId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoName">resetRepoName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetOwnerType` <a name="resetOwnerType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwnerType"></a>

```typescript
public resetOwnerType(): void
```

##### `resetRepoId` <a name="resetRepoId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoId"></a>

```typescript
public resetRepoId(): void
```

##### `resetRepoName` <a name="resetRepoName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoName"></a>

```typescript
public resetRepoName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerTypeInput">ownerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoIdInput">repoIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoNameInput">repoNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerType">ownerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoId">repoId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoName">repoName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `ownerTypeInput`<sup>Optional</sup> <a name="ownerTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerTypeInput"></a>

```typescript
public readonly ownerTypeInput: string;
```

- *Type:* string

---

##### `repoIdInput`<sup>Optional</sup> <a name="repoIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoIdInput"></a>

```typescript
public readonly repoIdInput: string;
```

- *Type:* string

---

##### `repoNameInput`<sup>Optional</sup> <a name="repoNameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoNameInput"></a>

```typescript
public readonly repoNameInput: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerType`<sup>Required</sup> <a name="ownerType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerType"></a>

```typescript
public readonly ownerType: string;
```

- *Type:* string

---

##### `repoId`<sup>Required</sup> <a name="repoId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoId"></a>

```typescript
public readonly repoId: string;
```

- *Type:* string

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoName"></a>

```typescript
public readonly repoName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationGitHub;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a>

---


### DevopsagentAssociationConfigurationGitLabOutputReference <a name="DevopsagentAssociationConfigurationGitLabOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetEnableWebhookUpdates">resetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetInstanceIdentifier">resetInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectPath">resetProjectPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableWebhookUpdates` <a name="resetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetEnableWebhookUpdates"></a>

```typescript
public resetEnableWebhookUpdates(): void
```

##### `resetInstanceIdentifier` <a name="resetInstanceIdentifier" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetInstanceIdentifier"></a>

```typescript
public resetInstanceIdentifier(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetProjectPath` <a name="resetProjectPath" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectPath"></a>

```typescript
public resetProjectPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdatesInput">enableWebhookUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifierInput">instanceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPathInput">projectPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifier">instanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPath">projectPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableWebhookUpdatesInput`<sup>Optional</sup> <a name="enableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdatesInput"></a>

```typescript
public readonly enableWebhookUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `instanceIdentifierInput`<sup>Optional</sup> <a name="instanceIdentifierInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifierInput"></a>

```typescript
public readonly instanceIdentifierInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `projectPathInput`<sup>Optional</sup> <a name="projectPathInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPathInput"></a>

```typescript
public readonly projectPathInput: string;
```

- *Type:* string

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `instanceIdentifier`<sup>Required</sup> <a name="instanceIdentifier" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifier"></a>

```typescript
public readonly instanceIdentifier: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `projectPath`<sup>Required</sup> <a name="projectPath" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPath"></a>

```typescript
public readonly projectPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationGitLab;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a>

---


### DevopsagentAssociationConfigurationMcpServerDatadogOutputReference <a name="DevopsagentAssociationConfigurationMcpServerDatadogOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEnableWebhookUpdates">resetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableWebhookUpdates` <a name="resetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEnableWebhookUpdates"></a>

```typescript
public resetEnableWebhookUpdates(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdatesInput">enableWebhookUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableWebhookUpdatesInput`<sup>Optional</sup> <a name="enableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdatesInput"></a>

```typescript
public readonly enableWebhookUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationMcpServerDatadog;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a>

---


### DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference <a name="DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEnableWebhookUpdates">resetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetTools">resetTools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableWebhookUpdates` <a name="resetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEnableWebhookUpdates"></a>

```typescript
public resetEnableWebhookUpdates(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetTools` <a name="resetTools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetTools"></a>

```typescript
public resetTools(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdatesInput">enableWebhookUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.toolsInput">toolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.tools">tools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableWebhookUpdatesInput`<sup>Optional</sup> <a name="enableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdatesInput"></a>

```typescript
public readonly enableWebhookUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `toolsInput`<sup>Optional</sup> <a name="toolsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.toolsInput"></a>

```typescript
public readonly toolsInput: string[];
```

- *Type:* string[]

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.tools"></a>

```typescript
public readonly tools: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationMcpServerGrafana;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a>

---


### DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference <a name="DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationMcpServerNewRelic;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a>

---


### DevopsagentAssociationConfigurationMcpServerOutputReference <a name="DevopsagentAssociationConfigurationMcpServerOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEnableWebhookUpdates">resetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetTools">resetTools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableWebhookUpdates` <a name="resetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEnableWebhookUpdates"></a>

```typescript
public resetEnableWebhookUpdates(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTools` <a name="resetTools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetTools"></a>

```typescript
public resetTools(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdatesInput">enableWebhookUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.toolsInput">toolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.tools">tools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableWebhookUpdatesInput`<sup>Optional</sup> <a name="enableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdatesInput"></a>

```typescript
public readonly enableWebhookUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `toolsInput`<sup>Optional</sup> <a name="toolsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.toolsInput"></a>

```typescript
public readonly toolsInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.tools"></a>

```typescript
public readonly tools: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationMcpServer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a>

---


### DevopsagentAssociationConfigurationMcpServerSigV4OutputReference <a name="DevopsagentAssociationConfigurationMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resetTools">resetTools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTools` <a name="resetTools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resetTools"></a>

```typescript
public resetTools(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.toolsInput">toolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.tools">tools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `toolsInput`<sup>Optional</sup> <a name="toolsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.toolsInput"></a>

```typescript
public readonly toolsInput: string[];
```

- *Type:* string[]

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.tools"></a>

```typescript
public readonly tools: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationMcpServerSigV4;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a>

---


### DevopsagentAssociationConfigurationMcpServerSplunkOutputReference <a name="DevopsagentAssociationConfigurationMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEnableWebhookUpdates">resetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableWebhookUpdates` <a name="resetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEnableWebhookUpdates"></a>

```typescript
public resetEnableWebhookUpdates(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdatesInput">enableWebhookUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableWebhookUpdatesInput`<sup>Optional</sup> <a name="enableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdatesInput"></a>

```typescript
public readonly enableWebhookUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationMcpServerSplunk;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a>

---


### DevopsagentAssociationConfigurationOutputReference <a name="DevopsagentAssociationConfigurationOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAws">putAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putDynatrace">putDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putEventChannel">putEventChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitHub">putGitHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitLab">putGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServer">putMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerDatadog">putMcpServerDatadog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerGrafana">putMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerNewRelic">putMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSigV4">putMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSplunk">putMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putPagerDuty">putPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putServiceNow">putServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSlack">putSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSourceAws">putSourceAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAws">resetAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetDynatrace">resetDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetEventChannel">resetEventChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitHub">resetGitHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitLab">resetGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServer">resetMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerDatadog">resetMcpServerDatadog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerGrafana">resetMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerNewRelic">resetMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSigV4">resetMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSplunk">resetMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetPagerDuty">resetPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetServiceNow">resetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSlack">resetSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSourceAws">resetSourceAws</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAws` <a name="putAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAws"></a>

```typescript
public putAws(value: DevopsagentAssociationConfigurationAws): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a>

---

##### `putAzure` <a name="putAzure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAzure"></a>

```typescript
public putAzure(value: DevopsagentAssociationConfigurationAzure): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a>

---

##### `putDynatrace` <a name="putDynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putDynatrace"></a>

```typescript
public putDynatrace(value: DevopsagentAssociationConfigurationDynatrace): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putDynatrace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a>

---

##### `putEventChannel` <a name="putEventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putEventChannel"></a>

```typescript
public putEventChannel(value: DevopsagentAssociationConfigurationEventChannel): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putEventChannel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a>

---

##### `putGitHub` <a name="putGitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitHub"></a>

```typescript
public putGitHub(value: DevopsagentAssociationConfigurationGitHub): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitHub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a>

---

##### `putGitLab` <a name="putGitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitLab"></a>

```typescript
public putGitLab(value: DevopsagentAssociationConfigurationGitLab): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitLab.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a>

---

##### `putMcpServer` <a name="putMcpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServer"></a>

```typescript
public putMcpServer(value: DevopsagentAssociationConfigurationMcpServer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a>

---

##### `putMcpServerDatadog` <a name="putMcpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerDatadog"></a>

```typescript
public putMcpServerDatadog(value: DevopsagentAssociationConfigurationMcpServerDatadog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerDatadog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a>

---

##### `putMcpServerGrafana` <a name="putMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerGrafana"></a>

```typescript
public putMcpServerGrafana(value: DevopsagentAssociationConfigurationMcpServerGrafana): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerGrafana.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a>

---

##### `putMcpServerNewRelic` <a name="putMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerNewRelic"></a>

```typescript
public putMcpServerNewRelic(value: DevopsagentAssociationConfigurationMcpServerNewRelic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerNewRelic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a>

---

##### `putMcpServerSigV4` <a name="putMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSigV4"></a>

```typescript
public putMcpServerSigV4(value: DevopsagentAssociationConfigurationMcpServerSigV4): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSigV4.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a>

---

##### `putMcpServerSplunk` <a name="putMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSplunk"></a>

```typescript
public putMcpServerSplunk(value: DevopsagentAssociationConfigurationMcpServerSplunk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSplunk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a>

---

##### `putPagerDuty` <a name="putPagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putPagerDuty"></a>

```typescript
public putPagerDuty(value: DevopsagentAssociationConfigurationPagerDuty): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putPagerDuty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a>

---

##### `putServiceNow` <a name="putServiceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putServiceNow"></a>

```typescript
public putServiceNow(value: DevopsagentAssociationConfigurationServiceNow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a>

---

##### `putSlack` <a name="putSlack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSlack"></a>

```typescript
public putSlack(value: DevopsagentAssociationConfigurationSlack): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a>

---

##### `putSourceAws` <a name="putSourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSourceAws"></a>

```typescript
public putSourceAws(value: DevopsagentAssociationConfigurationSourceAws): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSourceAws.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a>

---

##### `resetAws` <a name="resetAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAws"></a>

```typescript
public resetAws(): void
```

##### `resetAzure` <a name="resetAzure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAzure"></a>

```typescript
public resetAzure(): void
```

##### `resetDynatrace` <a name="resetDynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetDynatrace"></a>

```typescript
public resetDynatrace(): void
```

##### `resetEventChannel` <a name="resetEventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetEventChannel"></a>

```typescript
public resetEventChannel(): void
```

##### `resetGitHub` <a name="resetGitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitHub"></a>

```typescript
public resetGitHub(): void
```

##### `resetGitLab` <a name="resetGitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitLab"></a>

```typescript
public resetGitLab(): void
```

##### `resetMcpServer` <a name="resetMcpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServer"></a>

```typescript
public resetMcpServer(): void
```

##### `resetMcpServerDatadog` <a name="resetMcpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerDatadog"></a>

```typescript
public resetMcpServerDatadog(): void
```

##### `resetMcpServerGrafana` <a name="resetMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerGrafana"></a>

```typescript
public resetMcpServerGrafana(): void
```

##### `resetMcpServerNewRelic` <a name="resetMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerNewRelic"></a>

```typescript
public resetMcpServerNewRelic(): void
```

##### `resetMcpServerSigV4` <a name="resetMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSigV4"></a>

```typescript
public resetMcpServerSigV4(): void
```

##### `resetMcpServerSplunk` <a name="resetMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSplunk"></a>

```typescript
public resetMcpServerSplunk(): void
```

##### `resetPagerDuty` <a name="resetPagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetPagerDuty"></a>

```typescript
public resetPagerDuty(): void
```

##### `resetServiceNow` <a name="resetServiceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetServiceNow"></a>

```typescript
public resetServiceNow(): void
```

##### `resetSlack` <a name="resetSlack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSlack"></a>

```typescript
public resetSlack(): void
```

##### `resetSourceAws` <a name="resetSourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSourceAws"></a>

```typescript
public resetSourceAws(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference">DevopsagentAssociationConfigurationAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference">DevopsagentAssociationConfigurationAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatrace">dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference">DevopsagentAssociationConfigurationDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannel">eventChannel</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference">DevopsagentAssociationConfigurationEventChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHub">gitHub</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference">DevopsagentAssociationConfigurationGitHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLab">gitLab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference">DevopsagentAssociationConfigurationGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServer">mcpServer</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference">DevopsagentAssociationConfigurationMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadog">mcpServerDatadog</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference">DevopsagentAssociationConfigurationMcpServerDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafana">mcpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference">DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelic">mcpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference">DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4">mcpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference">DevopsagentAssociationConfigurationMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunk">mcpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference">DevopsagentAssociationConfigurationMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDuty">pagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference">DevopsagentAssociationConfigurationPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference">DevopsagentAssociationConfigurationServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference">DevopsagentAssociationConfigurationSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAws">sourceAws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference">DevopsagentAssociationConfigurationSourceAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.awsInput">awsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azureInput">azureInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatraceInput">dynatraceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannelInput">eventChannelInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHubInput">gitHubInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLabInput">gitLabInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadogInput">mcpServerDatadogInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafanaInput">mcpServerGrafanaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerInput">mcpServerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelicInput">mcpServerNewRelicInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4Input">mcpServerSigV4Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunkInput">mcpServerSplunkInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDutyInput">pagerDutyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNowInput">serviceNowInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slackInput">slackInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAwsInput">sourceAwsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.aws"></a>

```typescript
public readonly aws: DevopsagentAssociationConfigurationAwsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference">DevopsagentAssociationConfigurationAwsOutputReference</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azure"></a>

```typescript
public readonly azure: DevopsagentAssociationConfigurationAzureOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference">DevopsagentAssociationConfigurationAzureOutputReference</a>

---

##### `dynatrace`<sup>Required</sup> <a name="dynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatrace"></a>

```typescript
public readonly dynatrace: DevopsagentAssociationConfigurationDynatraceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference">DevopsagentAssociationConfigurationDynatraceOutputReference</a>

---

##### `eventChannel`<sup>Required</sup> <a name="eventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannel"></a>

```typescript
public readonly eventChannel: DevopsagentAssociationConfigurationEventChannelOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference">DevopsagentAssociationConfigurationEventChannelOutputReference</a>

---

##### `gitHub`<sup>Required</sup> <a name="gitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHub"></a>

```typescript
public readonly gitHub: DevopsagentAssociationConfigurationGitHubOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference">DevopsagentAssociationConfigurationGitHubOutputReference</a>

---

##### `gitLab`<sup>Required</sup> <a name="gitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLab"></a>

```typescript
public readonly gitLab: DevopsagentAssociationConfigurationGitLabOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference">DevopsagentAssociationConfigurationGitLabOutputReference</a>

---

##### `mcpServer`<sup>Required</sup> <a name="mcpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServer"></a>

```typescript
public readonly mcpServer: DevopsagentAssociationConfigurationMcpServerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference">DevopsagentAssociationConfigurationMcpServerOutputReference</a>

---

##### `mcpServerDatadog`<sup>Required</sup> <a name="mcpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadog"></a>

```typescript
public readonly mcpServerDatadog: DevopsagentAssociationConfigurationMcpServerDatadogOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference">DevopsagentAssociationConfigurationMcpServerDatadogOutputReference</a>

---

##### `mcpServerGrafana`<sup>Required</sup> <a name="mcpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafana"></a>

```typescript
public readonly mcpServerGrafana: DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference">DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference</a>

---

##### `mcpServerNewRelic`<sup>Required</sup> <a name="mcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelic"></a>

```typescript
public readonly mcpServerNewRelic: DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference">DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference</a>

---

##### `mcpServerSigV4`<sup>Required</sup> <a name="mcpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4"></a>

```typescript
public readonly mcpServerSigV4: DevopsagentAssociationConfigurationMcpServerSigV4OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference">DevopsagentAssociationConfigurationMcpServerSigV4OutputReference</a>

---

##### `mcpServerSplunk`<sup>Required</sup> <a name="mcpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunk"></a>

```typescript
public readonly mcpServerSplunk: DevopsagentAssociationConfigurationMcpServerSplunkOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference">DevopsagentAssociationConfigurationMcpServerSplunkOutputReference</a>

---

##### `pagerDuty`<sup>Required</sup> <a name="pagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDuty"></a>

```typescript
public readonly pagerDuty: DevopsagentAssociationConfigurationPagerDutyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference">DevopsagentAssociationConfigurationPagerDutyOutputReference</a>

---

##### `serviceNow`<sup>Required</sup> <a name="serviceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNow"></a>

```typescript
public readonly serviceNow: DevopsagentAssociationConfigurationServiceNowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference">DevopsagentAssociationConfigurationServiceNowOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slack"></a>

```typescript
public readonly slack: DevopsagentAssociationConfigurationSlackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference">DevopsagentAssociationConfigurationSlackOutputReference</a>

---

##### `sourceAws`<sup>Required</sup> <a name="sourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAws"></a>

```typescript
public readonly sourceAws: DevopsagentAssociationConfigurationSourceAwsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference">DevopsagentAssociationConfigurationSourceAwsOutputReference</a>

---

##### `awsInput`<sup>Optional</sup> <a name="awsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.awsInput"></a>

```typescript
public readonly awsInput: IResolvable | DevopsagentAssociationConfigurationAws;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a>

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azureInput"></a>

```typescript
public readonly azureInput: IResolvable | DevopsagentAssociationConfigurationAzure;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a>

---

##### `dynatraceInput`<sup>Optional</sup> <a name="dynatraceInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatraceInput"></a>

```typescript
public readonly dynatraceInput: IResolvable | DevopsagentAssociationConfigurationDynatrace;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a>

---

##### `eventChannelInput`<sup>Optional</sup> <a name="eventChannelInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannelInput"></a>

```typescript
public readonly eventChannelInput: IResolvable | DevopsagentAssociationConfigurationEventChannel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a>

---

##### `gitHubInput`<sup>Optional</sup> <a name="gitHubInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHubInput"></a>

```typescript
public readonly gitHubInput: IResolvable | DevopsagentAssociationConfigurationGitHub;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a>

---

##### `gitLabInput`<sup>Optional</sup> <a name="gitLabInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLabInput"></a>

```typescript
public readonly gitLabInput: IResolvable | DevopsagentAssociationConfigurationGitLab;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a>

---

##### `mcpServerDatadogInput`<sup>Optional</sup> <a name="mcpServerDatadogInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadogInput"></a>

```typescript
public readonly mcpServerDatadogInput: IResolvable | DevopsagentAssociationConfigurationMcpServerDatadog;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a>

---

##### `mcpServerGrafanaInput`<sup>Optional</sup> <a name="mcpServerGrafanaInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafanaInput"></a>

```typescript
public readonly mcpServerGrafanaInput: IResolvable | DevopsagentAssociationConfigurationMcpServerGrafana;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a>

---

##### `mcpServerInput`<sup>Optional</sup> <a name="mcpServerInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerInput"></a>

```typescript
public readonly mcpServerInput: IResolvable | DevopsagentAssociationConfigurationMcpServer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a>

---

##### `mcpServerNewRelicInput`<sup>Optional</sup> <a name="mcpServerNewRelicInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelicInput"></a>

```typescript
public readonly mcpServerNewRelicInput: IResolvable | DevopsagentAssociationConfigurationMcpServerNewRelic;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a>

---

##### `mcpServerSigV4Input`<sup>Optional</sup> <a name="mcpServerSigV4Input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4Input"></a>

```typescript
public readonly mcpServerSigV4Input: IResolvable | DevopsagentAssociationConfigurationMcpServerSigV4;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a>

---

##### `mcpServerSplunkInput`<sup>Optional</sup> <a name="mcpServerSplunkInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunkInput"></a>

```typescript
public readonly mcpServerSplunkInput: IResolvable | DevopsagentAssociationConfigurationMcpServerSplunk;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a>

---

##### `pagerDutyInput`<sup>Optional</sup> <a name="pagerDutyInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDutyInput"></a>

```typescript
public readonly pagerDutyInput: IResolvable | DevopsagentAssociationConfigurationPagerDuty;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a>

---

##### `serviceNowInput`<sup>Optional</sup> <a name="serviceNowInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNowInput"></a>

```typescript
public readonly serviceNowInput: IResolvable | DevopsagentAssociationConfigurationServiceNow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a>

---

##### `slackInput`<sup>Optional</sup> <a name="slackInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slackInput"></a>

```typescript
public readonly slackInput: IResolvable | DevopsagentAssociationConfigurationSlack;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a>

---

##### `sourceAwsInput`<sup>Optional</sup> <a name="sourceAwsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAwsInput"></a>

```typescript
public readonly sourceAwsInput: IResolvable | DevopsagentAssociationConfigurationSourceAws;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a>

---


### DevopsagentAssociationConfigurationPagerDutyOutputReference <a name="DevopsagentAssociationConfigurationPagerDutyOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetCustomerEmail">resetCustomerEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetEnableWebhookUpdates">resetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetServices">resetServices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomerEmail` <a name="resetCustomerEmail" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetCustomerEmail"></a>

```typescript
public resetCustomerEmail(): void
```

##### `resetEnableWebhookUpdates` <a name="resetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetEnableWebhookUpdates"></a>

```typescript
public resetEnableWebhookUpdates(): void
```

##### `resetServices` <a name="resetServices" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetServices"></a>

```typescript
public resetServices(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmailInput">customerEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdatesInput">enableWebhookUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.servicesInput">servicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmail">customerEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.services">services</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerEmailInput`<sup>Optional</sup> <a name="customerEmailInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmailInput"></a>

```typescript
public readonly customerEmailInput: string;
```

- *Type:* string

---

##### `enableWebhookUpdatesInput`<sup>Optional</sup> <a name="enableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdatesInput"></a>

```typescript
public readonly enableWebhookUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.servicesInput"></a>

```typescript
public readonly servicesInput: string[];
```

- *Type:* string[]

---

##### `customerEmail`<sup>Required</sup> <a name="customerEmail" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmail"></a>

```typescript
public readonly customerEmail: string;
```

- *Type:* string

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationPagerDuty;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a>

---


### DevopsagentAssociationConfigurationServiceNowOutputReference <a name="DevopsagentAssociationConfigurationServiceNowOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetEnableWebhookUpdates">resetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetInstanceId">resetInstanceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableWebhookUpdates` <a name="resetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetEnableWebhookUpdates"></a>

```typescript
public resetEnableWebhookUpdates(): void
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetInstanceId"></a>

```typescript
public resetInstanceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdatesInput">enableWebhookUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdates">enableWebhookUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableWebhookUpdatesInput`<sup>Optional</sup> <a name="enableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdatesInput"></a>

```typescript
public readonly enableWebhookUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `enableWebhookUpdates`<sup>Required</sup> <a name="enableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdates"></a>

```typescript
public readonly enableWebhookUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationServiceNow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a>

---


### DevopsagentAssociationConfigurationSlackOutputReference <a name="DevopsagentAssociationConfigurationSlackOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.putTransmissionTarget">putTransmissionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetTransmissionTarget">resetTransmissionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceName">resetWorkspaceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTransmissionTarget` <a name="putTransmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.putTransmissionTarget"></a>

```typescript
public putTransmissionTarget(value: DevopsagentAssociationConfigurationSlackTransmissionTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.putTransmissionTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a>

---

##### `resetTransmissionTarget` <a name="resetTransmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetTransmissionTarget"></a>

```typescript
public resetTransmissionTarget(): void
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```

##### `resetWorkspaceName` <a name="resetWorkspaceName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceName"></a>

```typescript
public resetWorkspaceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTarget">transmissionTarget</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTargetInput">transmissionTargetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceNameInput">workspaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceName">workspaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transmissionTarget`<sup>Required</sup> <a name="transmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTarget"></a>

```typescript
public readonly transmissionTarget: DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference</a>

---

##### `transmissionTargetInput`<sup>Optional</sup> <a name="transmissionTargetInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTargetInput"></a>

```typescript
public readonly transmissionTargetInput: IResolvable | DevopsagentAssociationConfigurationSlackTransmissionTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceNameInput`<sup>Optional</sup> <a name="workspaceNameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceNameInput"></a>

```typescript
public readonly workspaceNameInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceName"></a>

```typescript
public readonly workspaceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationSlack;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a>

---


### DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference <a name="DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelId">resetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelName">resetChannelName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannelId` <a name="resetChannelId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelId"></a>

```typescript
public resetChannelId(): void
```

##### `resetChannelName` <a name="resetChannelName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelName"></a>

```typescript
public resetChannelName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelIdInput">channelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelNameInput">channelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelIdInput"></a>

```typescript
public readonly channelIdInput: string;
```

- *Type:* string

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelNameInput"></a>

```typescript
public readonly channelNameInput: string;
```

- *Type:* string

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

---


### DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference <a name="DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.putIncidentResponseTarget">putIncidentResponseTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resetIncidentResponseTarget">resetIncidentResponseTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIncidentResponseTarget` <a name="putIncidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.putIncidentResponseTarget"></a>

```typescript
public putIncidentResponseTarget(value: DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.putIncidentResponseTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

---

##### `resetIncidentResponseTarget` <a name="resetIncidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resetIncidentResponseTarget"></a>

```typescript
public resetIncidentResponseTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTarget">incidentResponseTarget</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTargetInput">incidentResponseTargetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `incidentResponseTarget`<sup>Required</sup> <a name="incidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTarget"></a>

```typescript
public readonly incidentResponseTarget: DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference</a>

---

##### `incidentResponseTargetInput`<sup>Optional</sup> <a name="incidentResponseTargetInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTargetInput"></a>

```typescript
public readonly incidentResponseTargetInput: IResolvable | DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationSlackTransmissionTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a>

---


### DevopsagentAssociationConfigurationSourceAwsOutputReference <a name="DevopsagentAssociationConfigurationSourceAwsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountType">resetAccountType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAssumableRoleArn">resetAssumableRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResources` <a name="putResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putResources"></a>

```typescript
public putResources(value: IResolvable | DevopsagentAssociationConfigurationSourceAwsResources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putResources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | DevopsagentAssociationConfigurationSourceAwsTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetAccountType` <a name="resetAccountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountType"></a>

```typescript
public resetAccountType(): void
```

##### `resetAssumableRoleArn` <a name="resetAssumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAssumableRoleArn"></a>

```typescript
public resetAssumableRoleArn(): void
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList">DevopsagentAssociationConfigurationSourceAwsResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList">DevopsagentAssociationConfigurationSourceAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountTypeInput">accountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArnInput">assumableRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountType">accountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArn">assumableRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resources"></a>

```typescript
public readonly resources: DevopsagentAssociationConfigurationSourceAwsResourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList">DevopsagentAssociationConfigurationSourceAwsResourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tags"></a>

```typescript
public readonly tags: DevopsagentAssociationConfigurationSourceAwsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList">DevopsagentAssociationConfigurationSourceAwsTagsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `accountTypeInput`<sup>Optional</sup> <a name="accountTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountTypeInput"></a>

```typescript
public readonly accountTypeInput: string;
```

- *Type:* string

---

##### `assumableRoleArnInput`<sup>Optional</sup> <a name="assumableRoleArnInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArnInput"></a>

```typescript
public readonly assumableRoleArnInput: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: IResolvable | DevopsagentAssociationConfigurationSourceAwsResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DevopsagentAssociationConfigurationSourceAwsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `accountType`<sup>Required</sup> <a name="accountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountType"></a>

```typescript
public readonly accountType: string;
```

- *Type:* string

---

##### `assumableRoleArn`<sup>Required</sup> <a name="assumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArn"></a>

```typescript
public readonly assumableRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationSourceAws;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a>

---


### DevopsagentAssociationConfigurationSourceAwsResourcesList <a name="DevopsagentAssociationConfigurationSourceAwsResourcesList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.get"></a>

```typescript
public get(index: number): DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationSourceAwsResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>[]

---


### DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference <a name="DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceArn">resetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceMetadata">resetResourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceArn` <a name="resetResourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceArn"></a>

```typescript
public resetResourceArn(): void
```

##### `resetResourceMetadata` <a name="resetResourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceMetadata"></a>

```typescript
public resetResourceMetadata(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceType"></a>

```typescript
public resetResourceType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadataInput">resourceMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadata">resourceMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `resourceMetadataInput`<sup>Optional</sup> <a name="resourceMetadataInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadataInput"></a>

```typescript
public readonly resourceMetadataInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `resourceMetadata`<sup>Required</sup> <a name="resourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadata"></a>

```typescript
public readonly resourceMetadata: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationSourceAwsResources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>

---


### DevopsagentAssociationConfigurationSourceAwsTagsList <a name="DevopsagentAssociationConfigurationSourceAwsTagsList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.get"></a>

```typescript
public get(index: number): DevopsagentAssociationConfigurationSourceAwsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationSourceAwsTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>[]

---


### DevopsagentAssociationConfigurationSourceAwsTagsOutputReference <a name="DevopsagentAssociationConfigurationSourceAwsTagsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer"></a>

```typescript
import { devopsagentAssociation } from '@cdktn/provider-awscc'

new devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentAssociationConfigurationSourceAwsTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>

---



