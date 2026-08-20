# `casesLayout` Submodule <a name="`casesLayout` Submodule" id="@cdktn/provider-awscc.casesLayout"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CasesLayout <a name="CasesLayout" id="@cdktn/provider-awscc.casesLayout.CasesLayout"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout awscc_cases_layout}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

new casesLayout.CasesLayout(scope: Construct, id: string, config: CasesLayoutConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig">CasesLayoutConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig">CasesLayoutConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.resetDomainId">resetDomainId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayout.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.casesLayout.CasesLayout.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.casesLayout.CasesLayout.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.casesLayout.CasesLayout.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.casesLayout.CasesLayout.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.casesLayout.CasesLayout.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.casesLayout.CasesLayout.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.casesLayout.CasesLayout.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesLayout.CasesLayout.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContent` <a name="putContent" id="@cdktn/provider-awscc.casesLayout.CasesLayout.putContent"></a>

```typescript
public putContent(value: CasesLayoutContent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayout.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.casesLayout.CasesLayout.putTags"></a>

```typescript
public putTags(value: IResolvable | CasesLayoutTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayout.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>[]

---

##### `resetDomainId` <a name="resetDomainId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.resetDomainId"></a>

```typescript
public resetDomainId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.casesLayout.CasesLayout.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CasesLayout resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isConstruct"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

casesLayout.CasesLayout.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformElement"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

casesLayout.CasesLayout.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformResource"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

casesLayout.CasesLayout.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

casesLayout.CasesLayout.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CasesLayout resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CasesLayout to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CasesLayout that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CasesLayout to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference">CasesLayoutContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.layoutArn">layoutArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.layoutId">layoutId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList">CasesLayoutTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.contentInput">contentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.content"></a>

```typescript
public readonly content: CasesLayoutContentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference">CasesLayoutContentOutputReference</a>

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `layoutArn`<sup>Required</sup> <a name="layoutArn" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.layoutArn"></a>

```typescript
public readonly layoutArn: string;
```

- *Type:* string

---

##### `layoutId`<sup>Required</sup> <a name="layoutId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.layoutId"></a>

```typescript
public readonly layoutId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.tags"></a>

```typescript
public readonly tags: CasesLayoutTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList">CasesLayoutTagsList</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.contentInput"></a>

```typescript
public readonly contentInput: IResolvable | CasesLayoutContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a>

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CasesLayoutTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>[]

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CasesLayoutConfig <a name="CasesLayoutConfig" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

const casesLayoutConfig: casesLayout.CasesLayoutConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a></code> | Defines the layout structure and field organization for the case interface. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.name">name</a></code> | <code>string</code> | A descriptive name for the layout. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.domainId">domainId</a></code> | <code>string</code> | The unique identifier of the Cases domain. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>[]</code> | The tags that you attach to this layout. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.content"></a>

```typescript
public readonly content: CasesLayoutContent;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a>

Defines the layout structure and field organization for the case interface.

Specifies which fields appear in the top panel and More Info tab, and their display order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#content CasesLayout#content}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A descriptive name for the layout.

Must be unique within the Cases domain and should clearly indicate the layout's purpose and field organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#name CasesLayout#name}

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The unique identifier of the Cases domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#domain_id CasesLayout#domain_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CasesLayoutTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>[]

The tags that you attach to this layout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#tags CasesLayout#tags}

---

### CasesLayoutContent <a name="CasesLayoutContent" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContent.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

const casesLayoutContent: casesLayout.CasesLayoutContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent.property.basic">basic</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a></code> | Defines the field layout for the agent's case interface. |

---

##### `basic`<sup>Optional</sup> <a name="basic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContent.property.basic"></a>

```typescript
public readonly basic: CasesLayoutContentBasic;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a>

Defines the field layout for the agent's case interface.

Configures which fields appear in the top panel (immediately visible) and More Info tab (expandable section) of the case view, allowing customization of the agent experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#basic CasesLayout#basic}

---

### CasesLayoutContentBasic <a name="CasesLayoutContentBasic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

const casesLayoutContentBasic: casesLayout.CasesLayoutContentBasic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.property.moreInfo">moreInfo</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a></code> | Sections within a panel or tab of the page layout. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.property.topPanel">topPanel</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a></code> | Sections within a panel or tab of the page layout. |

---

##### `moreInfo`<sup>Optional</sup> <a name="moreInfo" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.property.moreInfo"></a>

```typescript
public readonly moreInfo: CasesLayoutContentBasicMoreInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a>

Sections within a panel or tab of the page layout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#more_info CasesLayout#more_info}

---

##### `topPanel`<sup>Optional</sup> <a name="topPanel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.property.topPanel"></a>

```typescript
public readonly topPanel: CasesLayoutContentBasicTopPanel;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a>

Sections within a panel or tab of the page layout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#top_panel CasesLayout#top_panel}

---

### CasesLayoutContentBasicMoreInfo <a name="CasesLayoutContentBasicMoreInfo" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

const casesLayoutContentBasicMoreInfo: casesLayout.CasesLayoutContentBasicMoreInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo.property.sections">sections</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>[]</code> | Defines the sections within a panel or tab. Contains field groups that organize related fields together. |

---

##### `sections`<sup>Optional</sup> <a name="sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo.property.sections"></a>

```typescript
public readonly sections: IResolvable | CasesLayoutContentBasicMoreInfoSections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>[]

Defines the sections within a panel or tab. Contains field groups that organize related fields together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#sections CasesLayout#sections}

---

### CasesLayoutContentBasicMoreInfoSections <a name="CasesLayoutContentBasicMoreInfoSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

const casesLayoutContentBasicMoreInfoSections: casesLayout.CasesLayoutContentBasicMoreInfoSections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections.property.fieldGroup">fieldGroup</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a></code> | Consists of a group of fields and associated properties. |

---

##### `fieldGroup`<sup>Optional</sup> <a name="fieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections.property.fieldGroup"></a>

```typescript
public readonly fieldGroup: CasesLayoutContentBasicMoreInfoSectionsFieldGroup;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a>

Consists of a group of fields and associated properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#field_group CasesLayout#field_group}

---

### CasesLayoutContentBasicMoreInfoSectionsFieldGroup <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

const casesLayoutContentBasicMoreInfoSectionsFieldGroup: casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>[]</code> | An ordered list of fields to display in this group. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.property.name">name</a></code> | <code>string</code> | A descriptive name for the field group. Helps organize related fields together in the layout interface. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.property.fields"></a>

```typescript
public readonly fields: IResolvable | CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>[]

An ordered list of fields to display in this group.

The order determines the sequence in which fields appear in the agent interface. Each field is referenced by its unique field ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#fields CasesLayout#fields}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A descriptive name for the field group. Helps organize related fields together in the layout interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#name CasesLayout#name}

---

### CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

const casesLayoutContentBasicMoreInfoSectionsFieldGroupFields: casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields.property.id">id</a></code> | <code>string</code> | The unique identifier of a field. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The unique identifier of a field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#id CasesLayout#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CasesLayoutContentBasicTopPanel <a name="CasesLayoutContentBasicTopPanel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

const casesLayoutContentBasicTopPanel: casesLayout.CasesLayoutContentBasicTopPanel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel.property.sections">sections</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>[]</code> | Defines the sections within a panel or tab. Contains field groups that organize related fields together. |

---

##### `sections`<sup>Optional</sup> <a name="sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel.property.sections"></a>

```typescript
public readonly sections: IResolvable | CasesLayoutContentBasicTopPanelSections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>[]

Defines the sections within a panel or tab. Contains field groups that organize related fields together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#sections CasesLayout#sections}

---

### CasesLayoutContentBasicTopPanelSections <a name="CasesLayoutContentBasicTopPanelSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

const casesLayoutContentBasicTopPanelSections: casesLayout.CasesLayoutContentBasicTopPanelSections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections.property.fieldGroup">fieldGroup</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a></code> | Consists of a group of fields and associated properties. |

---

##### `fieldGroup`<sup>Optional</sup> <a name="fieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections.property.fieldGroup"></a>

```typescript
public readonly fieldGroup: CasesLayoutContentBasicTopPanelSectionsFieldGroup;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a>

Consists of a group of fields and associated properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#field_group CasesLayout#field_group}

---

### CasesLayoutContentBasicTopPanelSectionsFieldGroup <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

const casesLayoutContentBasicTopPanelSectionsFieldGroup: casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>[]</code> | An ordered list of fields to display in this group. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.property.name">name</a></code> | <code>string</code> | A descriptive name for the field group. Helps organize related fields together in the layout interface. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.property.fields"></a>

```typescript
public readonly fields: IResolvable | CasesLayoutContentBasicTopPanelSectionsFieldGroupFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>[]

An ordered list of fields to display in this group.

The order determines the sequence in which fields appear in the agent interface. Each field is referenced by its unique field ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#fields CasesLayout#fields}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A descriptive name for the field group. Helps organize related fields together in the layout interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#name CasesLayout#name}

---

### CasesLayoutContentBasicTopPanelSectionsFieldGroupFields <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroupFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

const casesLayoutContentBasicTopPanelSectionsFieldGroupFields: casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields.property.id">id</a></code> | <code>string</code> | The unique identifier of a field. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The unique identifier of a field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#id CasesLayout#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CasesLayoutTags <a name="CasesLayoutTags" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTags.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

const casesLayoutTags: casesLayout.CasesLayoutTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#key CasesLayout#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#value CasesLayout#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CasesLayoutContentBasicMoreInfoOutputReference <a name="CasesLayoutContentBasicMoreInfoOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

new casesLayout.CasesLayoutContentBasicMoreInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.putSections">putSections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resetSections">resetSections</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSections` <a name="putSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.putSections"></a>

```typescript
public putSections(value: IResolvable | CasesLayoutContentBasicMoreInfoSections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.putSections.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>[]

---

##### `resetSections` <a name="resetSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resetSections"></a>

```typescript
public resetSections(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.sections">sections</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList">CasesLayoutContentBasicMoreInfoSectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.sectionsInput">sectionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sections`<sup>Required</sup> <a name="sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.sections"></a>

```typescript
public readonly sections: CasesLayoutContentBasicMoreInfoSectionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList">CasesLayoutContentBasicMoreInfoSectionsList</a>

---

##### `sectionsInput`<sup>Optional</sup> <a name="sectionsInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.sectionsInput"></a>

```typescript
public readonly sectionsInput: IResolvable | CasesLayoutContentBasicMoreInfoSections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesLayoutContentBasicMoreInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a>

---


### CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

new casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.get"></a>

```typescript
public get(index: number): CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>[]

---


### CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

new casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>

---


### CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

new casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.putFields"></a>

```typescript
public putFields(value: IResolvable | CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>[]

---

##### `resetFields` <a name="resetFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fields"></a>

```typescript
public readonly fields: CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesLayoutContentBasicMoreInfoSectionsFieldGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a>

---


### CasesLayoutContentBasicMoreInfoSectionsList <a name="CasesLayoutContentBasicMoreInfoSectionsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

new casesLayout.CasesLayoutContentBasicMoreInfoSectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.get"></a>

```typescript
public get(index: number): CasesLayoutContentBasicMoreInfoSectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesLayoutContentBasicMoreInfoSections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>[]

---


### CasesLayoutContentBasicMoreInfoSectionsOutputReference <a name="CasesLayoutContentBasicMoreInfoSectionsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

new casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.putFieldGroup">putFieldGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resetFieldGroup">resetFieldGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldGroup` <a name="putFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.putFieldGroup"></a>

```typescript
public putFieldGroup(value: CasesLayoutContentBasicMoreInfoSectionsFieldGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.putFieldGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a>

---

##### `resetFieldGroup` <a name="resetFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resetFieldGroup"></a>

```typescript
public resetFieldGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fieldGroup">fieldGroup</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference">CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fieldGroupInput">fieldGroupInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldGroup`<sup>Required</sup> <a name="fieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fieldGroup"></a>

```typescript
public readonly fieldGroup: CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference">CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference</a>

---

##### `fieldGroupInput`<sup>Optional</sup> <a name="fieldGroupInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fieldGroupInput"></a>

```typescript
public readonly fieldGroupInput: IResolvable | CasesLayoutContentBasicMoreInfoSectionsFieldGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesLayoutContentBasicMoreInfoSections;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections">CasesLayoutContentBasicMoreInfoSections</a>

---


### CasesLayoutContentBasicOutputReference <a name="CasesLayoutContentBasicOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

new casesLayout.CasesLayoutContentBasicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putMoreInfo">putMoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putTopPanel">putTopPanel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resetMoreInfo">resetMoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resetTopPanel">resetTopPanel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMoreInfo` <a name="putMoreInfo" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putMoreInfo"></a>

```typescript
public putMoreInfo(value: CasesLayoutContentBasicMoreInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putMoreInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a>

---

##### `putTopPanel` <a name="putTopPanel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putTopPanel"></a>

```typescript
public putTopPanel(value: CasesLayoutContentBasicTopPanel): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putTopPanel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a>

---

##### `resetMoreInfo` <a name="resetMoreInfo" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resetMoreInfo"></a>

```typescript
public resetMoreInfo(): void
```

##### `resetTopPanel` <a name="resetTopPanel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resetTopPanel"></a>

```typescript
public resetTopPanel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.moreInfo">moreInfo</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference">CasesLayoutContentBasicMoreInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.topPanel">topPanel</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference">CasesLayoutContentBasicTopPanelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.moreInfoInput">moreInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.topPanelInput">topPanelInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moreInfo`<sup>Required</sup> <a name="moreInfo" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.moreInfo"></a>

```typescript
public readonly moreInfo: CasesLayoutContentBasicMoreInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference">CasesLayoutContentBasicMoreInfoOutputReference</a>

---

##### `topPanel`<sup>Required</sup> <a name="topPanel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.topPanel"></a>

```typescript
public readonly topPanel: CasesLayoutContentBasicTopPanelOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference">CasesLayoutContentBasicTopPanelOutputReference</a>

---

##### `moreInfoInput`<sup>Optional</sup> <a name="moreInfoInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.moreInfoInput"></a>

```typescript
public readonly moreInfoInput: IResolvable | CasesLayoutContentBasicMoreInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a>

---

##### `topPanelInput`<sup>Optional</sup> <a name="topPanelInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.topPanelInput"></a>

```typescript
public readonly topPanelInput: IResolvable | CasesLayoutContentBasicTopPanel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesLayoutContentBasic;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a>

---


### CasesLayoutContentBasicTopPanelOutputReference <a name="CasesLayoutContentBasicTopPanelOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

new casesLayout.CasesLayoutContentBasicTopPanelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.putSections">putSections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resetSections">resetSections</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSections` <a name="putSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.putSections"></a>

```typescript
public putSections(value: IResolvable | CasesLayoutContentBasicTopPanelSections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.putSections.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>[]

---

##### `resetSections` <a name="resetSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resetSections"></a>

```typescript
public resetSections(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.sections">sections</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList">CasesLayoutContentBasicTopPanelSectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.sectionsInput">sectionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sections`<sup>Required</sup> <a name="sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.sections"></a>

```typescript
public readonly sections: CasesLayoutContentBasicTopPanelSectionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList">CasesLayoutContentBasicTopPanelSectionsList</a>

---

##### `sectionsInput`<sup>Optional</sup> <a name="sectionsInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.sectionsInput"></a>

```typescript
public readonly sectionsInput: IResolvable | CasesLayoutContentBasicTopPanelSections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesLayoutContentBasicTopPanel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a>

---


### CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

new casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.get"></a>

```typescript
public get(index: number): CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesLayoutContentBasicTopPanelSectionsFieldGroupFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>[]

---


### CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

new casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesLayoutContentBasicTopPanelSectionsFieldGroupFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>

---


### CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

new casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.putFields"></a>

```typescript
public putFields(value: IResolvable | CasesLayoutContentBasicTopPanelSectionsFieldGroupFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>[]

---

##### `resetFields` <a name="resetFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList">CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fields"></a>

```typescript
public readonly fields: CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList">CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | CasesLayoutContentBasicTopPanelSectionsFieldGroupFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields">CasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesLayoutContentBasicTopPanelSectionsFieldGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a>

---


### CasesLayoutContentBasicTopPanelSectionsList <a name="CasesLayoutContentBasicTopPanelSectionsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

new casesLayout.CasesLayoutContentBasicTopPanelSectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.get"></a>

```typescript
public get(index: number): CasesLayoutContentBasicTopPanelSectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesLayoutContentBasicTopPanelSections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>[]

---


### CasesLayoutContentBasicTopPanelSectionsOutputReference <a name="CasesLayoutContentBasicTopPanelSectionsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

new casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.putFieldGroup">putFieldGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resetFieldGroup">resetFieldGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldGroup` <a name="putFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.putFieldGroup"></a>

```typescript
public putFieldGroup(value: CasesLayoutContentBasicTopPanelSectionsFieldGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.putFieldGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a>

---

##### `resetFieldGroup` <a name="resetFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resetFieldGroup"></a>

```typescript
public resetFieldGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fieldGroup">fieldGroup</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference">CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fieldGroupInput">fieldGroupInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldGroup`<sup>Required</sup> <a name="fieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fieldGroup"></a>

```typescript
public readonly fieldGroup: CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference">CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference</a>

---

##### `fieldGroupInput`<sup>Optional</sup> <a name="fieldGroupInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fieldGroupInput"></a>

```typescript
public readonly fieldGroupInput: IResolvable | CasesLayoutContentBasicTopPanelSectionsFieldGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesLayoutContentBasicTopPanelSections;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections">CasesLayoutContentBasicTopPanelSections</a>

---


### CasesLayoutContentOutputReference <a name="CasesLayoutContentOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

new casesLayout.CasesLayoutContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.putBasic">putBasic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resetBasic">resetBasic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasic` <a name="putBasic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.putBasic"></a>

```typescript
public putBasic(value: CasesLayoutContentBasic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.putBasic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a>

---

##### `resetBasic` <a name="resetBasic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resetBasic"></a>

```typescript
public resetBasic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.basic">basic</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference">CasesLayoutContentBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.basicInput">basicInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basic`<sup>Required</sup> <a name="basic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.basic"></a>

```typescript
public readonly basic: CasesLayoutContentBasicOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference">CasesLayoutContentBasicOutputReference</a>

---

##### `basicInput`<sup>Optional</sup> <a name="basicInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.basicInput"></a>

```typescript
public readonly basicInput: IResolvable | CasesLayoutContentBasic;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesLayoutContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a>

---


### CasesLayoutTagsList <a name="CasesLayoutTagsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

new casesLayout.CasesLayoutTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.get"></a>

```typescript
public get(index: number): CasesLayoutTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesLayoutTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>[]

---


### CasesLayoutTagsOutputReference <a name="CasesLayoutTagsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer"></a>

```typescript
import { casesLayout } from '@cdktn/provider-awscc'

new casesLayout.CasesLayoutTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CasesLayoutTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags">CasesLayoutTags</a>

---



