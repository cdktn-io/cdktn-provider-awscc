# `apsRuleGroupsNamespace` Submodule <a name="`apsRuleGroupsNamespace` Submodule" id="@cdktn/provider-awscc.apsRuleGroupsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApsRuleGroupsNamespace <a name="ApsRuleGroupsNamespace" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace awscc_aps_rule_groups_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer"></a>

```typescript
import { apsRuleGroupsNamespace } from '@cdktn/provider-awscc'

new apsRuleGroupsNamespace.ApsRuleGroupsNamespace(scope: Construct, id: string, config: ApsRuleGroupsNamespaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig">ApsRuleGroupsNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig">ApsRuleGroupsNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.putTags"></a>

```typescript
public putTags(value: IResolvable | ApsRuleGroupsNamespaceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApsRuleGroupsNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isConstruct"></a>

```typescript
import { apsRuleGroupsNamespace } from '@cdktn/provider-awscc'

apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformElement"></a>

```typescript
import { apsRuleGroupsNamespace } from '@cdktn/provider-awscc'

apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformResource"></a>

```typescript
import { apsRuleGroupsNamespace } from '@cdktn/provider-awscc'

apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generateConfigForImport"></a>

```typescript
import { apsRuleGroupsNamespace } from '@cdktn/provider-awscc'

apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApsRuleGroupsNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApsRuleGroupsNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApsRuleGroupsNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApsRuleGroupsNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList">ApsRuleGroupsNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.workspaceInput">workspaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.workspace">workspace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.tags"></a>

```typescript
public readonly tags: ApsRuleGroupsNamespaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList">ApsRuleGroupsNamespaceTagsList</a>

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ApsRuleGroupsNamespaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>[]

---

##### `workspaceInput`<sup>Optional</sup> <a name="workspaceInput" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.workspaceInput"></a>

```typescript
public readonly workspaceInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.workspace"></a>

```typescript
public readonly workspace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApsRuleGroupsNamespaceConfig <a name="ApsRuleGroupsNamespaceConfig" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.Initializer"></a>

```typescript
import { apsRuleGroupsNamespace } from '@cdktn/provider-awscc'

const apsRuleGroupsNamespaceConfig: apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.data">data</a></code> | <code>string</code> | The RuleGroupsNamespace data. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.name">name</a></code> | <code>string</code> | The RuleGroupsNamespace name. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.workspace">workspace</a></code> | <code>string</code> | Required to identify a specific APS Workspace associated with this RuleGroupsNamespace. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

The RuleGroupsNamespace data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace#data ApsRuleGroupsNamespace#data}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The RuleGroupsNamespace name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace#name ApsRuleGroupsNamespace#name}

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.workspace"></a>

```typescript
public readonly workspace: string;
```

- *Type:* string

Required to identify a specific APS Workspace associated with this RuleGroupsNamespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace#workspace ApsRuleGroupsNamespace#workspace}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ApsRuleGroupsNamespaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace#tags ApsRuleGroupsNamespace#tags}

---

### ApsRuleGroupsNamespaceTags <a name="ApsRuleGroupsNamespaceTags" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags.Initializer"></a>

```typescript
import { apsRuleGroupsNamespace } from '@cdktn/provider-awscc'

const apsRuleGroupsNamespaceTags: apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace#key ApsRuleGroupsNamespace#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/aps_rule_groups_namespace#value ApsRuleGroupsNamespace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApsRuleGroupsNamespaceTagsList <a name="ApsRuleGroupsNamespaceTagsList" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer"></a>

```typescript
import { apsRuleGroupsNamespace } from '@cdktn/provider-awscc'

new apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.get"></a>

```typescript
public get(index: number): ApsRuleGroupsNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsRuleGroupsNamespaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>[]

---


### ApsRuleGroupsNamespaceTagsOutputReference <a name="ApsRuleGroupsNamespaceTagsOutputReference" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer"></a>

```typescript
import { apsRuleGroupsNamespace } from '@cdktn/provider-awscc'

new apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApsRuleGroupsNamespaceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsRuleGroupsNamespace.ApsRuleGroupsNamespaceTags">ApsRuleGroupsNamespaceTags</a>

---



