# `entityresolutionPolicyStatement` Submodule <a name="`entityresolutionPolicyStatement` Submodule" id="@cdktn/provider-awscc.entityresolutionPolicyStatement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityresolutionPolicyStatement <a name="EntityresolutionPolicyStatement" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement awscc_entityresolution_policy_statement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer"></a>

```typescript
import { entityresolutionPolicyStatement } from '@cdktn/provider-awscc'

new entityresolutionPolicyStatement.EntityresolutionPolicyStatement(scope: Construct, id: string, config: EntityresolutionPolicyStatementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig">EntityresolutionPolicyStatementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig">EntityresolutionPolicyStatementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetEffect">resetEffect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetEffect` <a name="resetEffect" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetEffect"></a>

```typescript
public resetEffect(): void
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EntityresolutionPolicyStatement resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isConstruct"></a>

```typescript
import { entityresolutionPolicyStatement } from '@cdktn/provider-awscc'

entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformElement"></a>

```typescript
import { entityresolutionPolicyStatement } from '@cdktn/provider-awscc'

entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformResource"></a>

```typescript
import { entityresolutionPolicyStatement } from '@cdktn/provider-awscc'

entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport"></a>

```typescript
import { entityresolutionPolicyStatement } from '@cdktn/provider-awscc'

entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EntityresolutionPolicyStatement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EntityresolutionPolicyStatement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EntityresolutionPolicyStatement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EntityresolutionPolicyStatement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.actionInput">actionInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.principalInput">principalInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.statementIdInput">statementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.action">action</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.principal">principal</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.statementId">statementId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.actionInput"></a>

```typescript
public readonly actionInput: string[];
```

- *Type:* string[]

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.principalInput"></a>

```typescript
public readonly principalInput: string[];
```

- *Type:* string[]

---

##### `statementIdInput`<sup>Optional</sup> <a name="statementIdInput" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.statementIdInput"></a>

```typescript
public readonly statementIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.action"></a>

```typescript
public readonly action: string[];
```

- *Type:* string[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.principal"></a>

```typescript
public readonly principal: string[];
```

- *Type:* string[]

---

##### `statementId`<sup>Required</sup> <a name="statementId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.statementId"></a>

```typescript
public readonly statementId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EntityresolutionPolicyStatementConfig <a name="EntityresolutionPolicyStatementConfig" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.Initializer"></a>

```typescript
import { entityresolutionPolicyStatement } from '@cdktn/provider-awscc'

const entityresolutionPolicyStatementConfig: entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.arn">arn</a></code> | <code>string</code> | Arn of the resource to which the policy statement is being attached. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.statementId">statementId</a></code> | <code>string</code> | The Statement Id of the policy statement that is being attached. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.action">action</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#action EntityresolutionPolicyStatement#action}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.condition">condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#condition EntityresolutionPolicyStatement#condition}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.effect">effect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#effect EntityresolutionPolicyStatement#effect}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.principal">principal</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#principal EntityresolutionPolicyStatement#principal}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Arn of the resource to which the policy statement is being attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#arn EntityresolutionPolicyStatement#arn}

---

##### `statementId`<sup>Required</sup> <a name="statementId" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.statementId"></a>

```typescript
public readonly statementId: string;
```

- *Type:* string

The Statement Id of the policy statement that is being attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#statement_id EntityresolutionPolicyStatement#statement_id}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.action"></a>

```typescript
public readonly action: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#action EntityresolutionPolicyStatement#action}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#condition EntityresolutionPolicyStatement#condition}.

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#effect EntityresolutionPolicyStatement#effect}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.entityresolutionPolicyStatement.EntityresolutionPolicyStatementConfig.property.principal"></a>

```typescript
public readonly principal: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/entityresolution_policy_statement#principal EntityresolutionPolicyStatement#principal}.

---



