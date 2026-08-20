# `accessanalyzerArchiveRule` Submodule <a name="`accessanalyzerArchiveRule` Submodule" id="@cdktn/provider-awscc.accessanalyzerArchiveRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessanalyzerArchiveRule <a name="AccessanalyzerArchiveRule" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule awscc_accessanalyzer_archive_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer"></a>

```typescript
import { accessanalyzerArchiveRule } from '@cdktn/provider-awscc'

new accessanalyzerArchiveRule.AccessanalyzerArchiveRule(scope: Construct, id: string, config: AccessanalyzerArchiveRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig">AccessanalyzerArchiveRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig">AccessanalyzerArchiveRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.putFilter">putFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.putFilter"></a>

```typescript
public putFilter(value: IResolvable | {[ key: string ]: AccessanalyzerArchiveRuleFilter}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AccessanalyzerArchiveRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isConstruct"></a>

```typescript
import { accessanalyzerArchiveRule } from '@cdktn/provider-awscc'

accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformElement"></a>

```typescript
import { accessanalyzerArchiveRule } from '@cdktn/provider-awscc'

accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformResource"></a>

```typescript
import { accessanalyzerArchiveRule } from '@cdktn/provider-awscc'

accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport"></a>

```typescript
import { accessanalyzerArchiveRule } from '@cdktn/provider-awscc'

accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AccessanalyzerArchiveRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessanalyzerArchiveRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessanalyzerArchiveRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AccessanalyzerArchiveRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap">AccessanalyzerArchiveRuleFilterMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerNameInput">analyzerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerName">analyzerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filter"></a>

```typescript
public readonly filter: AccessanalyzerArchiveRuleFilterMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap">AccessanalyzerArchiveRuleFilterMap</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `analyzerNameInput`<sup>Optional</sup> <a name="analyzerNameInput" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerNameInput"></a>

```typescript
public readonly analyzerNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | {[ key: string ]: AccessanalyzerArchiveRuleFilter};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>}

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `analyzerName`<sup>Required</sup> <a name="analyzerName" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.analyzerName"></a>

```typescript
public readonly analyzerName: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessanalyzerArchiveRuleConfig <a name="AccessanalyzerArchiveRuleConfig" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.Initializer"></a>

```typescript
import { accessanalyzerArchiveRule } from '@cdktn/provider-awscc'

const accessanalyzerArchiveRuleConfig: accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.analyzerName">analyzerName</a></code> | <code>string</code> | The name of the analyzer for the archive rule. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.filter">filter</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>}</code> | The criteria for the archive rule. A map of filter criteria property names to their criterion values. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.ruleName">ruleName</a></code> | <code>string</code> | The name of the archive rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `analyzerName`<sup>Required</sup> <a name="analyzerName" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.analyzerName"></a>

```typescript
public readonly analyzerName: string;
```

- *Type:* string

The name of the analyzer for the archive rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#analyzer_name AccessanalyzerArchiveRule#analyzer_name}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | {[ key: string ]: AccessanalyzerArchiveRuleFilter};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>}

The criteria for the archive rule. A map of filter criteria property names to their criterion values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#filter AccessanalyzerArchiveRule#filter}

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleConfig.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name of the archive rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#rule_name AccessanalyzerArchiveRule#rule_name}

---

### AccessanalyzerArchiveRuleFilter <a name="AccessanalyzerArchiveRuleFilter" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.Initializer"></a>

```typescript
import { accessanalyzerArchiveRule } from '@cdktn/provider-awscc'

const accessanalyzerArchiveRuleFilter: accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.contains">contains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#contains AccessanalyzerArchiveRule#contains}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.eq">eq</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#eq AccessanalyzerArchiveRule#eq}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.exists">exists</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#exists AccessanalyzerArchiveRule#exists}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.neq">neq</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#neq AccessanalyzerArchiveRule#neq}. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.contains"></a>

```typescript
public readonly contains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#contains AccessanalyzerArchiveRule#contains}.

---

##### `eq`<sup>Optional</sup> <a name="eq" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.eq"></a>

```typescript
public readonly eq: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#eq AccessanalyzerArchiveRule#eq}.

---

##### `exists`<sup>Optional</sup> <a name="exists" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.exists"></a>

```typescript
public readonly exists: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#exists AccessanalyzerArchiveRule#exists}.

---

##### `neq`<sup>Optional</sup> <a name="neq" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter.property.neq"></a>

```typescript
public readonly neq: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/accessanalyzer_archive_rule#neq AccessanalyzerArchiveRule#neq}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessanalyzerArchiveRuleFilterMap <a name="AccessanalyzerArchiveRuleFilterMap" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.Initializer"></a>

```typescript
import { accessanalyzerArchiveRule } from '@cdktn/provider-awscc'

new accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.get"></a>

```typescript
public get(key: string): AccessanalyzerArchiveRuleFilterOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: AccessanalyzerArchiveRuleFilter};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>}

---


### AccessanalyzerArchiveRuleFilterOutputReference <a name="AccessanalyzerArchiveRuleFilterOutputReference" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer"></a>

```typescript
import { accessanalyzerArchiveRule } from '@cdktn/provider-awscc'

new accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetContains">resetContains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetEq">resetEq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetExists">resetExists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetNeq">resetNeq</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContains` <a name="resetContains" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetContains"></a>

```typescript
public resetContains(): void
```

##### `resetEq` <a name="resetEq" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetEq"></a>

```typescript
public resetEq(): void
```

##### `resetExists` <a name="resetExists" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetExists"></a>

```typescript
public resetExists(): void
```

##### `resetNeq` <a name="resetNeq" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.resetNeq"></a>

```typescript
public resetNeq(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.containsInput">containsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eqInput">eqInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.existsInput">existsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neqInput">neqInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.contains">contains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eq">eq</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.exists">exists</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neq">neq</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containsInput`<sup>Optional</sup> <a name="containsInput" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.containsInput"></a>

```typescript
public readonly containsInput: string[];
```

- *Type:* string[]

---

##### `eqInput`<sup>Optional</sup> <a name="eqInput" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eqInput"></a>

```typescript
public readonly eqInput: string[];
```

- *Type:* string[]

---

##### `existsInput`<sup>Optional</sup> <a name="existsInput" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.existsInput"></a>

```typescript
public readonly existsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `neqInput`<sup>Optional</sup> <a name="neqInput" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neqInput"></a>

```typescript
public readonly neqInput: string[];
```

- *Type:* string[]

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.contains"></a>

```typescript
public readonly contains: string[];
```

- *Type:* string[]

---

##### `eq`<sup>Required</sup> <a name="eq" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.eq"></a>

```typescript
public readonly eq: string[];
```

- *Type:* string[]

---

##### `exists`<sup>Required</sup> <a name="exists" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.exists"></a>

```typescript
public readonly exists: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `neq`<sup>Required</sup> <a name="neq" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.neq"></a>

```typescript
public readonly neq: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessanalyzerArchiveRuleFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.accessanalyzerArchiveRule.AccessanalyzerArchiveRuleFilter">AccessanalyzerArchiveRuleFilter</a>

---



