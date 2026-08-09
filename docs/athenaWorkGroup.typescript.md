# `athenaWorkGroup` Submodule <a name="`athenaWorkGroup` Submodule" id="@cdktn/provider-awscc.athenaWorkGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaWorkGroup <a name="AthenaWorkGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group awscc_athena_work_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroup(scope: Construct, id: string, config: AthenaWorkGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig">AthenaWorkGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig">AthenaWorkGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration">putWorkGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates">putWorkGroupConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetRecursiveDeleteOption">resetRecursiveDeleteOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetWorkGroupConfiguration">resetWorkGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetWorkGroupConfigurationUpdates">resetWorkGroupConfigurationUpdates</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | AthenaWorkGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>[]

---

##### `putWorkGroupConfiguration` <a name="putWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration"></a>

```typescript
public putWorkGroupConfiguration(value: AthenaWorkGroupWorkGroupConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a>

---

##### `putWorkGroupConfigurationUpdates` <a name="putWorkGroupConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates"></a>

```typescript
public putWorkGroupConfigurationUpdates(value: AthenaWorkGroupWorkGroupConfigurationUpdates): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRecursiveDeleteOption` <a name="resetRecursiveDeleteOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetRecursiveDeleteOption"></a>

```typescript
public resetRecursiveDeleteOption(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWorkGroupConfiguration` <a name="resetWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetWorkGroupConfiguration"></a>

```typescript
public resetWorkGroupConfiguration(): void
```

##### `resetWorkGroupConfigurationUpdates` <a name="resetWorkGroupConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetWorkGroupConfigurationUpdates"></a>

```typescript
public resetWorkGroupConfigurationUpdates(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AthenaWorkGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isConstruct"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

athenaWorkGroup.AthenaWorkGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformElement"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

athenaWorkGroup.AthenaWorkGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformResource"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

athenaWorkGroup.AthenaWorkGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

athenaWorkGroup.AthenaWorkGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AthenaWorkGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AthenaWorkGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AthenaWorkGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AthenaWorkGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList">AthenaWorkGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfiguration">workGroupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationUpdates">workGroupConfigurationUpdates</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.recursiveDeleteOptionInput">recursiveDeleteOptionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationInput">workGroupConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationUpdatesInput">workGroupConfigurationUpdatesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.recursiveDeleteOption">recursiveDeleteOption</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tags"></a>

```typescript
public readonly tags: AthenaWorkGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList">AthenaWorkGroupTagsList</a>

---

##### `workGroupConfiguration`<sup>Required</sup> <a name="workGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfiguration"></a>

```typescript
public readonly workGroupConfiguration: AthenaWorkGroupWorkGroupConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationOutputReference</a>

---

##### `workGroupConfigurationUpdates`<sup>Required</sup> <a name="workGroupConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationUpdates"></a>

```typescript
public readonly workGroupConfigurationUpdates: AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recursiveDeleteOptionInput`<sup>Optional</sup> <a name="recursiveDeleteOptionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.recursiveDeleteOptionInput"></a>

```typescript
public readonly recursiveDeleteOptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AthenaWorkGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>[]

---

##### `workGroupConfigurationInput`<sup>Optional</sup> <a name="workGroupConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationInput"></a>

```typescript
public readonly workGroupConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a>

---

##### `workGroupConfigurationUpdatesInput`<sup>Optional</sup> <a name="workGroupConfigurationUpdatesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationUpdatesInput"></a>

```typescript
public readonly workGroupConfigurationUpdatesInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdates;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recursiveDeleteOption`<sup>Required</sup> <a name="recursiveDeleteOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.recursiveDeleteOption"></a>

```typescript
public readonly recursiveDeleteOption: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaWorkGroupConfig <a name="AthenaWorkGroupConfig" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupConfig: athenaWorkGroup.AthenaWorkGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.name">name</a></code> | <code>string</code> | The workGroup name. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.description">description</a></code> | <code>string</code> | The workgroup description. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.recursiveDeleteOption">recursiveDeleteOption</a></code> | <code>boolean \| cdktn.IResolvable</code> | The option to delete the workgroup and its contents even if the workgroup contains any named queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.state">state</a></code> | <code>string</code> | The state of the workgroup: ENABLED or DISABLED. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>[]</code> | One or more tags, separated by commas, that you want to attach to the workgroup as you create it. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.workGroupConfiguration">workGroupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a></code> | The workgroup configuration. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.workGroupConfigurationUpdates">workGroupConfigurationUpdates</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a></code> | The workgroup configuration update object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The workGroup name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#name AthenaWorkGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The workgroup description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#description AthenaWorkGroup#description}

---

##### `recursiveDeleteOption`<sup>Optional</sup> <a name="recursiveDeleteOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.recursiveDeleteOption"></a>

```typescript
public readonly recursiveDeleteOption: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The option to delete the workgroup and its contents even if the workgroup contains any named queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#recursive_delete_option AthenaWorkGroup#recursive_delete_option}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

The state of the workgroup: ENABLED or DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#state AthenaWorkGroup#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AthenaWorkGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>[]

One or more tags, separated by commas, that you want to attach to the workgroup as you create it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#tags AthenaWorkGroup#tags}

---

##### `workGroupConfiguration`<sup>Optional</sup> <a name="workGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.workGroupConfiguration"></a>

```typescript
public readonly workGroupConfiguration: AthenaWorkGroupWorkGroupConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a>

The workgroup configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#work_group_configuration AthenaWorkGroup#work_group_configuration}

---

##### `workGroupConfigurationUpdates`<sup>Optional</sup> <a name="workGroupConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.workGroupConfigurationUpdates"></a>

```typescript
public readonly workGroupConfigurationUpdates: AthenaWorkGroupWorkGroupConfigurationUpdates;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a>

The workgroup configuration update object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#work_group_configuration_updates AthenaWorkGroup#work_group_configuration_updates}

---

### AthenaWorkGroupTags <a name="AthenaWorkGroupTags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupTags: athenaWorkGroup.AthenaWorkGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#key AthenaWorkGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#value AthenaWorkGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#key AthenaWorkGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#value AthenaWorkGroup#value}.

---

### AthenaWorkGroupWorkGroupConfiguration <a name="AthenaWorkGroupWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.additionalConfiguration">additionalConfiguration</a></code> | <code>string</code> | Additional Configuration that are passed to Athena Spark Calculations running in this workgroup. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.bytesScannedCutoffPerQuery">bytesScannedCutoffPerQuery</a></code> | <code>number</code> | The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.customerContentEncryptionConfiguration">customerContentEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a></code> | Indicates the KMS key for encrypting notebook content. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.enforceWorkGroupConfiguration">enforceWorkGroupConfiguration</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to "true", the settings for the workgroup override client-side settings. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.engineConfiguration">engineConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a></code> | The engine configuration for running queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.engineVersion">engineVersion</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a></code> | The Athena engine version for running queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.executionRole">executionRole</a></code> | <code>string</code> | The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.managedQueryResultsConfiguration">managedQueryResultsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a></code> | The configuration for the managed query results and encryption option. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.monitoringConfiguration">monitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a></code> | Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.publishCloudwatchMetricsEnabled">publishCloudwatchMetricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates that the Amazon CloudWatch metrics are enabled for the workgroup. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.requesterPaysEnabled">requesterPaysEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.resultConfiguration">resultConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a></code> | The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. |

---

##### `additionalConfiguration`<sup>Optional</sup> <a name="additionalConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.additionalConfiguration"></a>

```typescript
public readonly additionalConfiguration: string;
```

- *Type:* string

Additional Configuration that are passed to Athena Spark Calculations running in this workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#additional_configuration AthenaWorkGroup#additional_configuration}

---

##### `bytesScannedCutoffPerQuery`<sup>Optional</sup> <a name="bytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.bytesScannedCutoffPerQuery"></a>

```typescript
public readonly bytesScannedCutoffPerQuery: number;
```

- *Type:* number

The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#bytes_scanned_cutoff_per_query AthenaWorkGroup#bytes_scanned_cutoff_per_query}

---

##### `customerContentEncryptionConfiguration`<sup>Optional</sup> <a name="customerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.customerContentEncryptionConfiguration"></a>

```typescript
public readonly customerContentEncryptionConfiguration: AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a>

Indicates the KMS key for encrypting notebook content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#customer_content_encryption_configuration AthenaWorkGroup#customer_content_encryption_configuration}

---

##### `enforceWorkGroupConfiguration`<sup>Optional</sup> <a name="enforceWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.enforceWorkGroupConfiguration"></a>

```typescript
public readonly enforceWorkGroupConfiguration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to "true", the settings for the workgroup override client-side settings.

If set to "false", client-side settings are used

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enforce_work_group_configuration AthenaWorkGroup#enforce_work_group_configuration}

---

##### `engineConfiguration`<sup>Optional</sup> <a name="engineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.engineConfiguration"></a>

```typescript
public readonly engineConfiguration: AthenaWorkGroupWorkGroupConfigurationEngineConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a>

The engine configuration for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#engine_configuration AthenaWorkGroup#engine_configuration}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.engineVersion"></a>

```typescript
public readonly engineVersion: AthenaWorkGroupWorkGroupConfigurationEngineVersion;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a>

The Athena engine version for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#engine_version AthenaWorkGroup#engine_version}

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups.

This property applies only to Spark enabled workgroups and Identity Center enabled workgroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#execution_role AthenaWorkGroup#execution_role}

---

##### `managedQueryResultsConfiguration`<sup>Optional</sup> <a name="managedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.managedQueryResultsConfiguration"></a>

```typescript
public readonly managedQueryResultsConfiguration: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a>

The configuration for the managed query results and encryption option.

ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#managed_query_results_configuration AthenaWorkGroup#managed_query_results_configuration}

---

##### `monitoringConfiguration`<sup>Optional</sup> <a name="monitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.monitoringConfiguration"></a>

```typescript
public readonly monitoringConfiguration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a>

Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#monitoring_configuration AthenaWorkGroup#monitoring_configuration}

---

##### `publishCloudwatchMetricsEnabled`<sup>Optional</sup> <a name="publishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.publishCloudwatchMetricsEnabled"></a>

```typescript
public readonly publishCloudwatchMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#publish_cloudwatch_metrics_enabled AthenaWorkGroup#publish_cloudwatch_metrics_enabled}

---

##### `requesterPaysEnabled`<sup>Optional</sup> <a name="requesterPaysEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.requesterPaysEnabled"></a>

```typescript
public readonly requesterPaysEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries.

If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#requester_pays_enabled AthenaWorkGroup#requester_pays_enabled}

---

##### `resultConfiguration`<sup>Optional</sup> <a name="resultConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.resultConfiguration"></a>

```typescript
public readonly resultConfiguration: AthenaWorkGroupWorkGroupConfigurationResultConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a>

The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results.

These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#result_configuration AthenaWorkGroup#result_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration.property.kmsKey">kmsKey</a></code> | <code>string</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationEngineConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationEngineConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.additionalConfigs">additionalConfigs</a></code> | <code>{[ key: string ]: string}</code> | Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.classifications">classifications</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>[]</code> | The configuration classifications that can be specified for the engine. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.coordinatorDpuSize">coordinatorDpuSize</a></code> | <code>number</code> | The number of DPUs to use for the coordinator. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.defaultExecutorDpuSize">defaultExecutorDpuSize</a></code> | <code>number</code> | The default number of DPUs to use for executors. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.maxConcurrentDpus">maxConcurrentDpus</a></code> | <code>number</code> | The maximum number of DPUs that can run concurrently. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.sparkProperties">sparkProperties</a></code> | <code>{[ key: string ]: string}</code> | Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning. |

---

##### `additionalConfigs`<sup>Optional</sup> <a name="additionalConfigs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.additionalConfigs"></a>

```typescript
public readonly additionalConfigs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs.

To specify an Athena notebook that the Jupyter server will download and serve, specify a value for the StartSessionRequest$NotebookVersion field, and then add a key named NotebookId to AdditionalConfigs that has the value of the Athena notebook ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#additional_configs AthenaWorkGroup#additional_configs}

---

##### `classifications`<sup>Optional</sup> <a name="classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.classifications"></a>

```typescript
public readonly classifications: IResolvable | AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>[]

The configuration classifications that can be specified for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#classifications AthenaWorkGroup#classifications}

---

##### `coordinatorDpuSize`<sup>Optional</sup> <a name="coordinatorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.coordinatorDpuSize"></a>

```typescript
public readonly coordinatorDpuSize: number;
```

- *Type:* number

The number of DPUs to use for the coordinator.

A coordinator is a special executor that orchestrates processing work and manages other executors in a notebook session. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#coordinator_dpu_size AthenaWorkGroup#coordinator_dpu_size}

---

##### `defaultExecutorDpuSize`<sup>Optional</sup> <a name="defaultExecutorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.defaultExecutorDpuSize"></a>

```typescript
public readonly defaultExecutorDpuSize: number;
```

- *Type:* number

The default number of DPUs to use for executors.

An executor is the smallest unit of compute that a notebook session can request from Athena. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#default_executor_dpu_size AthenaWorkGroup#default_executor_dpu_size}

---

##### `maxConcurrentDpus`<sup>Optional</sup> <a name="maxConcurrentDpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.maxConcurrentDpus"></a>

```typescript
public readonly maxConcurrentDpus: number;
```

- *Type:* number

The maximum number of DPUs that can run concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#max_concurrent_dpus AthenaWorkGroup#max_concurrent_dpus}

---

##### `sparkProperties`<sup>Optional</sup> <a name="sparkProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.sparkProperties"></a>

```typescript
public readonly sparkProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#spark_properties AthenaWorkGroup#spark_properties}

---

### AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.property.name">name</a></code> | <code>string</code> | The name of the configuration classification. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | A set of properties specified within a configuration classification. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the configuration classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#name AthenaWorkGroup#name}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of properties specified within a configuration classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#properties AthenaWorkGroup#properties}

---

### AthenaWorkGroupWorkGroupConfigurationEngineVersion <a name="AthenaWorkGroupWorkGroupConfigurationEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationEngineVersion: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion.property.selectedEngineVersion">selectedEngineVersion</a></code> | <code>string</code> | The engine version requested by the user. |

---

##### `selectedEngineVersion`<sup>Optional</sup> <a name="selectedEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion.property.selectedEngineVersion"></a>

```typescript
public readonly selectedEngineVersion: string;
```

- *Type:* string

The engine version requested by the user.

Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#selected_engine_version AthenaWorkGroup#selected_engine_version}

---

### AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | Indicates the encryption configuration for Athena Managed Storage. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

Indicates the encryption configuration for Athena Managed Storage.

If not setting this field, Managed Storage will encrypt the query results with Athena's encryption key

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey">kmsKey</a></code> | <code>string</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationMonitoringConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.cloudwatchLoggingConfiguration">cloudwatchLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | Configuration settings for delivering logs to Amazon CloudWatch log groups. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.managedLoggingConfiguration">managedLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a></code> | Configuration settings for managed log persistence. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.s3LoggingConfiguration">s3LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a></code> | Configuration settings for delivering logs to Amazon S3 buckets. |

---

##### `cloudwatchLoggingConfiguration`<sup>Optional</sup> <a name="cloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.cloudwatchLoggingConfiguration"></a>

```typescript
public readonly cloudwatchLoggingConfiguration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a>

Configuration settings for delivering logs to Amazon CloudWatch log groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#cloudwatch_logging_configuration AthenaWorkGroup#cloudwatch_logging_configuration}

---

##### `managedLoggingConfiguration`<sup>Optional</sup> <a name="managedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.managedLoggingConfiguration"></a>

```typescript
public readonly managedLoggingConfiguration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

Configuration settings for managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#managed_logging_configuration AthenaWorkGroup#managed_logging_configuration}

---

##### `s3LoggingConfiguration`<sup>Optional</sup> <a name="s3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.s3LoggingConfiguration"></a>

```typescript
public readonly s3LoggingConfiguration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

Configuration settings for delivering logs to Amazon S3 buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#s3_logging_configuration AthenaWorkGroup#s3_logging_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables CloudWatch logging. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logGroup">logGroup</a></code> | <code>string</code> | The name of the log group in Amazon CloudWatch Logs where you want to publish your logs. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logStreamNamePrefix">logStreamNamePrefix</a></code> | <code>string</code> | Prefix for the CloudWatch log stream name. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logTypes">logTypes</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | The types of logs that you want to publish to CloudWatch. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables CloudWatch logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_group AthenaWorkGroup#log_group}

---

##### `logStreamNamePrefix`<sup>Optional</sup> <a name="logStreamNamePrefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logStreamNamePrefix"></a>

```typescript
public readonly logStreamNamePrefix: string;
```

- *Type:* string

Prefix for the CloudWatch log stream name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_stream_name_prefix AthenaWorkGroup#log_stream_name_prefix}

---

##### `logTypes`<sup>Optional</sup> <a name="logTypes" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logTypes"></a>

```typescript
public readonly logTypes: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

The types of logs that you want to publish to CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_types AthenaWorkGroup#log_types}

---

### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables managed log persistence. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey">kmsKey</a></code> | <code>string</code> | The KMS key ARN to encrypt the logs stored in managed log persistence. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The KMS key ARN to encrypt the logs stored in managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables S3 log delivery. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.kmsKey">kmsKey</a></code> | <code>string</code> | The KMS key ARN to encrypt the logs published to the given Amazon S3 destination. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.logLocation">logLocation</a></code> | <code>string</code> | The Amazon S3 destination URI for log publishing. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables S3 log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

##### `logLocation`<sup>Optional</sup> <a name="logLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.logLocation"></a>

```typescript
public readonly logLocation: string;
```

- *Type:* string

The Amazon S3 destination URI for log publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_location AthenaWorkGroup#log_location}

---

### AthenaWorkGroupWorkGroupConfigurationResultConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationResultConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationResultConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.aclConfiguration">aclConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a></code> | Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | The AWS account ID of the owner of S3 bucket where query results are stored. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.outputLocation">outputLocation</a></code> | <code>string</code> | The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. |

---

##### `aclConfiguration`<sup>Optional</sup> <a name="aclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.aclConfiguration"></a>

```typescript
public readonly aclConfiguration: AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a>

Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#acl_configuration AthenaWorkGroup#acl_configuration}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a>

If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

The AWS account ID of the owner of S3 bucket where query results are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#expected_bucket_owner AthenaWorkGroup#expected_bucket_owner}

---

##### `outputLocation`<sup>Optional</sup> <a name="outputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.outputLocation"></a>

```typescript
public readonly outputLocation: string;
```

- *Type:* string

The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/.

To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#output_location AthenaWorkGroup#output_location}

---

### AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration.property.s3AclOption">s3AclOption</a></code> | <code>string</code> | The Amazon S3 canned ACL that Athena should specify when storing query results. |

---

##### `s3AclOption`<sup>Optional</sup> <a name="s3AclOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration.property.s3AclOption"></a>

```typescript
public readonly s3AclOption: string;
```

- *Type:* string

The Amazon S3 canned ACL that Athena should specify when storing query results.

Currently the only supported canned ACL is BUCKET_OWNER_FULL_CONTROL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#s3_acl_option AthenaWorkGroup#s3_acl_option}

---

### AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.property.encryptionOption">encryptionOption</a></code> | <code>string</code> | Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.property.kmsKey">kmsKey</a></code> | <code>string</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `encryptionOption`<sup>Optional</sup> <a name="encryptionOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.property.encryptionOption"></a>

```typescript
public readonly encryptionOption: string;
```

- *Type:* string

Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_option AthenaWorkGroup#encryption_option}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationUpdates <a name="AthenaWorkGroupWorkGroupConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationUpdates: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.additionalConfiguration">additionalConfiguration</a></code> | <code>string</code> | Additional Configuration that are passed to Athena Spark Calculations running in this workgroup. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.bytesScannedCutoffPerQuery">bytesScannedCutoffPerQuery</a></code> | <code>number</code> | The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.customerContentEncryptionConfiguration">customerContentEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a></code> | Indicates the KMS key for encrypting notebook content. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.enforceWorkGroupConfiguration">enforceWorkGroupConfiguration</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to "true", the settings for the workgroup override client-side settings. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.engineConfiguration">engineConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a></code> | The engine configuration for running queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.engineVersion">engineVersion</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a></code> | The Athena engine version for running queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.executionRole">executionRole</a></code> | <code>string</code> | The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.managedQueryResultsConfiguration">managedQueryResultsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a></code> | The configuration for the managed query results and encryption option. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.monitoringConfiguration">monitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a></code> | Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.publishCloudwatchMetricsEnabled">publishCloudwatchMetricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates that the Amazon CloudWatch metrics are enabled for the workgroup. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.removeBytesScannedCutoffPerQuery">removeBytesScannedCutoffPerQuery</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates that the data usage control limit per query is removed. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.removeCustomerContentEncryptionConfiguration">removeCustomerContentEncryptionConfiguration</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_customer_content_encryption_configuration AthenaWorkGroup#remove_customer_content_encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.requesterPaysEnabled">requesterPaysEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.resultConfigurationUpdates">resultConfigurationUpdates</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a></code> | The result configuration information about the queries in this workgroup that will be updated. |

---

##### `additionalConfiguration`<sup>Optional</sup> <a name="additionalConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.additionalConfiguration"></a>

```typescript
public readonly additionalConfiguration: string;
```

- *Type:* string

Additional Configuration that are passed to Athena Spark Calculations running in this workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#additional_configuration AthenaWorkGroup#additional_configuration}

---

##### `bytesScannedCutoffPerQuery`<sup>Optional</sup> <a name="bytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.bytesScannedCutoffPerQuery"></a>

```typescript
public readonly bytesScannedCutoffPerQuery: number;
```

- *Type:* number

The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#bytes_scanned_cutoff_per_query AthenaWorkGroup#bytes_scanned_cutoff_per_query}

---

##### `customerContentEncryptionConfiguration`<sup>Optional</sup> <a name="customerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.customerContentEncryptionConfiguration"></a>

```typescript
public readonly customerContentEncryptionConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a>

Indicates the KMS key for encrypting notebook content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#customer_content_encryption_configuration AthenaWorkGroup#customer_content_encryption_configuration}

---

##### `enforceWorkGroupConfiguration`<sup>Optional</sup> <a name="enforceWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.enforceWorkGroupConfiguration"></a>

```typescript
public readonly enforceWorkGroupConfiguration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to "true", the settings for the workgroup override client-side settings.

If set to "false", client-side settings are used

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enforce_work_group_configuration AthenaWorkGroup#enforce_work_group_configuration}

---

##### `engineConfiguration`<sup>Optional</sup> <a name="engineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.engineConfiguration"></a>

```typescript
public readonly engineConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a>

The engine configuration for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#engine_configuration AthenaWorkGroup#engine_configuration}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.engineVersion"></a>

```typescript
public readonly engineVersion: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a>

The Athena engine version for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#engine_version AthenaWorkGroup#engine_version}

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups.

This property applies only to Spark enabled workgroups and Identity Center enabled workgroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#execution_role AthenaWorkGroup#execution_role}

---

##### `managedQueryResultsConfiguration`<sup>Optional</sup> <a name="managedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.managedQueryResultsConfiguration"></a>

```typescript
public readonly managedQueryResultsConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a>

The configuration for the managed query results and encryption option.

ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#managed_query_results_configuration AthenaWorkGroup#managed_query_results_configuration}

---

##### `monitoringConfiguration`<sup>Optional</sup> <a name="monitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.monitoringConfiguration"></a>

```typescript
public readonly monitoringConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a>

Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#monitoring_configuration AthenaWorkGroup#monitoring_configuration}

---

##### `publishCloudwatchMetricsEnabled`<sup>Optional</sup> <a name="publishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.publishCloudwatchMetricsEnabled"></a>

```typescript
public readonly publishCloudwatchMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#publish_cloudwatch_metrics_enabled AthenaWorkGroup#publish_cloudwatch_metrics_enabled}

---

##### `removeBytesScannedCutoffPerQuery`<sup>Optional</sup> <a name="removeBytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.removeBytesScannedCutoffPerQuery"></a>

```typescript
public readonly removeBytesScannedCutoffPerQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates that the data usage control limit per query is removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_bytes_scanned_cutoff_per_query AthenaWorkGroup#remove_bytes_scanned_cutoff_per_query}

---

##### `removeCustomerContentEncryptionConfiguration`<sup>Optional</sup> <a name="removeCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.removeCustomerContentEncryptionConfiguration"></a>

```typescript
public readonly removeCustomerContentEncryptionConfiguration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_customer_content_encryption_configuration AthenaWorkGroup#remove_customer_content_encryption_configuration}.

---

##### `requesterPaysEnabled`<sup>Optional</sup> <a name="requesterPaysEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.requesterPaysEnabled"></a>

```typescript
public readonly requesterPaysEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries.

If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#requester_pays_enabled AthenaWorkGroup#requester_pays_enabled}

---

##### `resultConfigurationUpdates`<sup>Optional</sup> <a name="resultConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.resultConfigurationUpdates"></a>

```typescript
public readonly resultConfigurationUpdates: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a>

The result configuration information about the queries in this workgroup that will be updated.

Includes the updated results location and an updated option for encrypting query results. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#result_configuration_updates AthenaWorkGroup#result_configuration_updates}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration.property.kmsKey">kmsKey</a></code> | <code>string</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.additionalConfigs">additionalConfigs</a></code> | <code>{[ key: string ]: string}</code> | Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.classifications">classifications</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>[]</code> | The configuration classifications that can be specified for the engine. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.coordinatorDpuSize">coordinatorDpuSize</a></code> | <code>number</code> | The number of DPUs to use for the coordinator. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.defaultExecutorDpuSize">defaultExecutorDpuSize</a></code> | <code>number</code> | The default number of DPUs to use for executors. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.maxConcurrentDpus">maxConcurrentDpus</a></code> | <code>number</code> | The maximum number of DPUs that can run concurrently. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.sparkProperties">sparkProperties</a></code> | <code>{[ key: string ]: string}</code> | Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning. |

---

##### `additionalConfigs`<sup>Optional</sup> <a name="additionalConfigs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.additionalConfigs"></a>

```typescript
public readonly additionalConfigs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs.

To specify an Athena notebook that the Jupyter server will download and serve, specify a value for the StartSessionRequest$NotebookVersion field, and then add a key named NotebookId to AdditionalConfigs that has the value of the Athena notebook ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#additional_configs AthenaWorkGroup#additional_configs}

---

##### `classifications`<sup>Optional</sup> <a name="classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.classifications"></a>

```typescript
public readonly classifications: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>[]

The configuration classifications that can be specified for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#classifications AthenaWorkGroup#classifications}

---

##### `coordinatorDpuSize`<sup>Optional</sup> <a name="coordinatorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.coordinatorDpuSize"></a>

```typescript
public readonly coordinatorDpuSize: number;
```

- *Type:* number

The number of DPUs to use for the coordinator.

A coordinator is a special executor that orchestrates processing work and manages other executors in a notebook session. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#coordinator_dpu_size AthenaWorkGroup#coordinator_dpu_size}

---

##### `defaultExecutorDpuSize`<sup>Optional</sup> <a name="defaultExecutorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.defaultExecutorDpuSize"></a>

```typescript
public readonly defaultExecutorDpuSize: number;
```

- *Type:* number

The default number of DPUs to use for executors.

An executor is the smallest unit of compute that a notebook session can request from Athena. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#default_executor_dpu_size AthenaWorkGroup#default_executor_dpu_size}

---

##### `maxConcurrentDpus`<sup>Optional</sup> <a name="maxConcurrentDpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.maxConcurrentDpus"></a>

```typescript
public readonly maxConcurrentDpus: number;
```

- *Type:* number

The maximum number of DPUs that can run concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#max_concurrent_dpus AthenaWorkGroup#max_concurrent_dpus}

---

##### `sparkProperties`<sup>Optional</sup> <a name="sparkProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.sparkProperties"></a>

```typescript
public readonly sparkProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#spark_properties AthenaWorkGroup#spark_properties}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.property.name">name</a></code> | <code>string</code> | The name of the configuration classification. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | A set of properties specified within a configuration classification. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the configuration classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#name AthenaWorkGroup#name}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of properties specified within a configuration classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#properties AthenaWorkGroup#properties}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion.property.selectedEngineVersion">selectedEngineVersion</a></code> | <code>string</code> | The engine version requested by the user. |

---

##### `selectedEngineVersion`<sup>Optional</sup> <a name="selectedEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion.property.selectedEngineVersion"></a>

```typescript
public readonly selectedEngineVersion: string;
```

- *Type:* string

The engine version requested by the user.

Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#selected_engine_version AthenaWorkGroup#selected_engine_version}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | Indicates the encryption configuration for Athena Managed Storage. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a>

Indicates the encryption configuration for Athena Managed Storage.

If not setting this field, Managed Storage will encrypt the query results with Athena's encryption key

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey">kmsKey</a></code> | <code>string</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.cloudwatchLoggingConfiguration">cloudwatchLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | Configuration settings for delivering logs to Amazon CloudWatch log groups. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.managedLoggingConfiguration">managedLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a></code> | Configuration settings for managed log persistence. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.s3LoggingConfiguration">s3LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a></code> | Configuration settings for delivering logs to Amazon S3 buckets. |

---

##### `cloudwatchLoggingConfiguration`<sup>Optional</sup> <a name="cloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.cloudwatchLoggingConfiguration"></a>

```typescript
public readonly cloudwatchLoggingConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a>

Configuration settings for delivering logs to Amazon CloudWatch log groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#cloudwatch_logging_configuration AthenaWorkGroup#cloudwatch_logging_configuration}

---

##### `managedLoggingConfiguration`<sup>Optional</sup> <a name="managedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.managedLoggingConfiguration"></a>

```typescript
public readonly managedLoggingConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a>

Configuration settings for managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#managed_logging_configuration AthenaWorkGroup#managed_logging_configuration}

---

##### `s3LoggingConfiguration`<sup>Optional</sup> <a name="s3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.s3LoggingConfiguration"></a>

```typescript
public readonly s3LoggingConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a>

Configuration settings for delivering logs to Amazon S3 buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#s3_logging_configuration AthenaWorkGroup#s3_logging_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables CloudWatch logging. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logGroup">logGroup</a></code> | <code>string</code> | The name of the log group in Amazon CloudWatch Logs where you want to publish your logs. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logStreamNamePrefix">logStreamNamePrefix</a></code> | <code>string</code> | Prefix for the CloudWatch log stream name. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logTypes">logTypes</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | The types of logs that you want to publish to CloudWatch. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables CloudWatch logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_group AthenaWorkGroup#log_group}

---

##### `logStreamNamePrefix`<sup>Optional</sup> <a name="logStreamNamePrefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logStreamNamePrefix"></a>

```typescript
public readonly logStreamNamePrefix: string;
```

- *Type:* string

Prefix for the CloudWatch log stream name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_stream_name_prefix AthenaWorkGroup#log_stream_name_prefix}

---

##### `logTypes`<sup>Optional</sup> <a name="logTypes" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logTypes"></a>

```typescript
public readonly logTypes: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

The types of logs that you want to publish to CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_types AthenaWorkGroup#log_types}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables managed log persistence. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey">kmsKey</a></code> | <code>string</code> | The KMS key ARN to encrypt the logs stored in managed log persistence. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The KMS key ARN to encrypt the logs stored in managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables S3 log delivery. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.kmsKey">kmsKey</a></code> | <code>string</code> | The KMS key ARN to encrypt the logs published to the given Amazon S3 destination. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.logLocation">logLocation</a></code> | <code>string</code> | The Amazon S3 destination URI for log publishing. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables S3 log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

##### `logLocation`<sup>Optional</sup> <a name="logLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.logLocation"></a>

```typescript
public readonly logLocation: string;
```

- *Type:* string

The Amazon S3 destination URI for log publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_location AthenaWorkGroup#log_location}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.aclConfiguration">aclConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a></code> | Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a></code> | If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | The AWS account ID of the owner of S3 bucket where query results are stored. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.outputLocation">outputLocation</a></code> | <code>string</code> | The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeAclConfiguration">removeAclConfiguration</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_acl_configuration AthenaWorkGroup#remove_acl_configuration}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeEncryptionConfiguration">removeEncryptionConfiguration</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_encryption_configuration AthenaWorkGroup#remove_encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeExpectedBucketOwner">removeExpectedBucketOwner</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_expected_bucket_owner AthenaWorkGroup#remove_expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeOutputLocation">removeOutputLocation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_output_location AthenaWorkGroup#remove_output_location}. |

---

##### `aclConfiguration`<sup>Optional</sup> <a name="aclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.aclConfiguration"></a>

```typescript
public readonly aclConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a>

Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#acl_configuration AthenaWorkGroup#acl_configuration}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a>

If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

The AWS account ID of the owner of S3 bucket where query results are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#expected_bucket_owner AthenaWorkGroup#expected_bucket_owner}

---

##### `outputLocation`<sup>Optional</sup> <a name="outputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.outputLocation"></a>

```typescript
public readonly outputLocation: string;
```

- *Type:* string

The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/.

To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#output_location AthenaWorkGroup#output_location}

---

##### `removeAclConfiguration`<sup>Optional</sup> <a name="removeAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeAclConfiguration"></a>

```typescript
public readonly removeAclConfiguration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_acl_configuration AthenaWorkGroup#remove_acl_configuration}.

---

##### `removeEncryptionConfiguration`<sup>Optional</sup> <a name="removeEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeEncryptionConfiguration"></a>

```typescript
public readonly removeEncryptionConfiguration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_encryption_configuration AthenaWorkGroup#remove_encryption_configuration}.

---

##### `removeExpectedBucketOwner`<sup>Optional</sup> <a name="removeExpectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeExpectedBucketOwner"></a>

```typescript
public readonly removeExpectedBucketOwner: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_expected_bucket_owner AthenaWorkGroup#remove_expected_bucket_owner}.

---

##### `removeOutputLocation`<sup>Optional</sup> <a name="removeOutputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeOutputLocation"></a>

```typescript
public readonly removeOutputLocation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_output_location AthenaWorkGroup#remove_output_location}.

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration.property.s3AclOption">s3AclOption</a></code> | <code>string</code> | The Amazon S3 canned ACL that Athena should specify when storing query results. |

---

##### `s3AclOption`<sup>Optional</sup> <a name="s3AclOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration.property.s3AclOption"></a>

```typescript
public readonly s3AclOption: string;
```

- *Type:* string

The Amazon S3 canned ACL that Athena should specify when storing query results.

Currently the only supported canned ACL is BUCKET_OWNER_FULL_CONTROL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#s3_acl_option AthenaWorkGroup#s3_acl_option}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

const athenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration: athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.property.encryptionOption">encryptionOption</a></code> | <code>string</code> | Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.property.kmsKey">kmsKey</a></code> | <code>string</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `encryptionOption`<sup>Optional</sup> <a name="encryptionOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.property.encryptionOption"></a>

```typescript
public readonly encryptionOption: string;
```

- *Type:* string

Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_option AthenaWorkGroup#encryption_option}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

## Classes <a name="Classes" id="Classes"></a>

### AthenaWorkGroupTagsList <a name="AthenaWorkGroupTagsList" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.get"></a>

```typescript
public get(index: number): AthenaWorkGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>[]

---


### AthenaWorkGroupTagsOutputReference <a name="AthenaWorkGroupTagsOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>

---


### AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.get"></a>

```typescript
public get(index: number): AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>[]

---


### AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>

---


### AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.putClassifications">putClassifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetAdditionalConfigs">resetAdditionalConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetClassifications">resetClassifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetCoordinatorDpuSize">resetCoordinatorDpuSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetDefaultExecutorDpuSize">resetDefaultExecutorDpuSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetMaxConcurrentDpus">resetMaxConcurrentDpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetSparkProperties">resetSparkProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClassifications` <a name="putClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.putClassifications"></a>

```typescript
public putClassifications(value: IResolvable | AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.putClassifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>[]

---

##### `resetAdditionalConfigs` <a name="resetAdditionalConfigs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetAdditionalConfigs"></a>

```typescript
public resetAdditionalConfigs(): void
```

##### `resetClassifications` <a name="resetClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetClassifications"></a>

```typescript
public resetClassifications(): void
```

##### `resetCoordinatorDpuSize` <a name="resetCoordinatorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetCoordinatorDpuSize"></a>

```typescript
public resetCoordinatorDpuSize(): void
```

##### `resetDefaultExecutorDpuSize` <a name="resetDefaultExecutorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetDefaultExecutorDpuSize"></a>

```typescript
public resetDefaultExecutorDpuSize(): void
```

##### `resetMaxConcurrentDpus` <a name="resetMaxConcurrentDpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetMaxConcurrentDpus"></a>

```typescript
public resetMaxConcurrentDpus(): void
```

##### `resetSparkProperties` <a name="resetSparkProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetSparkProperties"></a>

```typescript
public resetSparkProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.classifications">classifications</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.additionalConfigsInput">additionalConfigsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.classificationsInput">classificationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.coordinatorDpuSizeInput">coordinatorDpuSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.defaultExecutorDpuSizeInput">defaultExecutorDpuSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.maxConcurrentDpusInput">maxConcurrentDpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.sparkPropertiesInput">sparkPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.additionalConfigs">additionalConfigs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.coordinatorDpuSize">coordinatorDpuSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.defaultExecutorDpuSize">defaultExecutorDpuSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.maxConcurrentDpus">maxConcurrentDpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.sparkProperties">sparkProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classifications`<sup>Required</sup> <a name="classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.classifications"></a>

```typescript
public readonly classifications: AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList</a>

---

##### `additionalConfigsInput`<sup>Optional</sup> <a name="additionalConfigsInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.additionalConfigsInput"></a>

```typescript
public readonly additionalConfigsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `classificationsInput`<sup>Optional</sup> <a name="classificationsInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.classificationsInput"></a>

```typescript
public readonly classificationsInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>[]

---

##### `coordinatorDpuSizeInput`<sup>Optional</sup> <a name="coordinatorDpuSizeInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.coordinatorDpuSizeInput"></a>

```typescript
public readonly coordinatorDpuSizeInput: number;
```

- *Type:* number

---

##### `defaultExecutorDpuSizeInput`<sup>Optional</sup> <a name="defaultExecutorDpuSizeInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.defaultExecutorDpuSizeInput"></a>

```typescript
public readonly defaultExecutorDpuSizeInput: number;
```

- *Type:* number

---

##### `maxConcurrentDpusInput`<sup>Optional</sup> <a name="maxConcurrentDpusInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.maxConcurrentDpusInput"></a>

```typescript
public readonly maxConcurrentDpusInput: number;
```

- *Type:* number

---

##### `sparkPropertiesInput`<sup>Optional</sup> <a name="sparkPropertiesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.sparkPropertiesInput"></a>

```typescript
public readonly sparkPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `additionalConfigs`<sup>Required</sup> <a name="additionalConfigs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.additionalConfigs"></a>

```typescript
public readonly additionalConfigs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `coordinatorDpuSize`<sup>Required</sup> <a name="coordinatorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.coordinatorDpuSize"></a>

```typescript
public readonly coordinatorDpuSize: number;
```

- *Type:* number

---

##### `defaultExecutorDpuSize`<sup>Required</sup> <a name="defaultExecutorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.defaultExecutorDpuSize"></a>

```typescript
public readonly defaultExecutorDpuSize: number;
```

- *Type:* number

---

##### `maxConcurrentDpus`<sup>Required</sup> <a name="maxConcurrentDpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.maxConcurrentDpus"></a>

```typescript
public readonly maxConcurrentDpus: number;
```

- *Type:* number

---

##### `sparkProperties`<sup>Required</sup> <a name="sparkProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.sparkProperties"></a>

```typescript
public readonly sparkProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationEngineConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resetSelectedEngineVersion">resetSelectedEngineVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSelectedEngineVersion` <a name="resetSelectedEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resetSelectedEngineVersion"></a>

```typescript
public resetSelectedEngineVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion">effectiveEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.selectedEngineVersionInput">selectedEngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion">selectedEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveEngineVersion`<sup>Required</sup> <a name="effectiveEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion"></a>

```typescript
public readonly effectiveEngineVersion: string;
```

- *Type:* string

---

##### `selectedEngineVersionInput`<sup>Optional</sup> <a name="selectedEngineVersionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.selectedEngineVersionInput"></a>

```typescript
public readonly selectedEngineVersionInput: string;
```

- *Type:* string

---

##### `selectedEngineVersion`<sup>Required</sup> <a name="selectedEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion"></a>

```typescript
public readonly selectedEngineVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationEngineVersion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a>

---


### AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration"></a>

```typescript
public putEncryptionConfiguration(value: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration"></a>

```typescript
public resetEncryptionConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```typescript
public readonly encryptionConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix">resetLogStreamNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogTypes">resetLogTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogGroup"></a>

```typescript
public resetLogGroup(): void
```

##### `resetLogStreamNamePrefix` <a name="resetLogStreamNamePrefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix"></a>

```typescript
public resetLogStreamNamePrefix(): void
```

##### `resetLogTypes` <a name="resetLogTypes" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogTypes"></a>

```typescript
public resetLogTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput">logStreamNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypesInput">logTypesInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix">logStreamNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes">logTypes</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupInput"></a>

```typescript
public readonly logGroupInput: string;
```

- *Type:* string

---

##### `logStreamNamePrefixInput`<sup>Optional</sup> <a name="logStreamNamePrefixInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput"></a>

```typescript
public readonly logStreamNamePrefixInput: string;
```

- *Type:* string

---

##### `logTypesInput`<sup>Optional</sup> <a name="logTypesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypesInput"></a>

```typescript
public readonly logTypesInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `logStreamNamePrefix`<sup>Required</sup> <a name="logStreamNamePrefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix"></a>

```typescript
public readonly logStreamNamePrefix: string;
```

- *Type:* string

---

##### `logTypes`<sup>Required</sup> <a name="logTypes" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes"></a>

```typescript
public readonly logTypes: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration">putCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration">putManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration">putS3LoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetCloudwatchLoggingConfiguration">resetCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration">resetManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetS3LoggingConfiguration">resetS3LoggingConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLoggingConfiguration` <a name="putCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration"></a>

```typescript
public putCloudwatchLoggingConfiguration(value: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---

##### `putManagedLoggingConfiguration` <a name="putManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration"></a>

```typescript
public putManagedLoggingConfiguration(value: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

---

##### `putS3LoggingConfiguration` <a name="putS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration"></a>

```typescript
public putS3LoggingConfiguration(value: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

---

##### `resetCloudwatchLoggingConfiguration` <a name="resetCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetCloudwatchLoggingConfiguration"></a>

```typescript
public resetCloudwatchLoggingConfiguration(): void
```

##### `resetManagedLoggingConfiguration` <a name="resetManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration"></a>

```typescript
public resetManagedLoggingConfiguration(): void
```

##### `resetS3LoggingConfiguration` <a name="resetS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetS3LoggingConfiguration"></a>

```typescript
public resetS3LoggingConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration">cloudwatchLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfiguration">managedLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfiguration">s3LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfigurationInput">cloudwatchLoggingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput">managedLoggingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput">s3LoggingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLoggingConfiguration`<sup>Required</sup> <a name="cloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration"></a>

```typescript
public readonly cloudwatchLoggingConfiguration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a>

---

##### `managedLoggingConfiguration`<sup>Required</sup> <a name="managedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfiguration"></a>

```typescript
public readonly managedLoggingConfiguration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference</a>

---

##### `s3LoggingConfiguration`<sup>Required</sup> <a name="s3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfiguration"></a>

```typescript
public readonly s3LoggingConfiguration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference</a>

---

##### `cloudwatchLoggingConfigurationInput`<sup>Optional</sup> <a name="cloudwatchLoggingConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfigurationInput"></a>

```typescript
public readonly cloudwatchLoggingConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---

##### `managedLoggingConfigurationInput`<sup>Optional</sup> <a name="managedLoggingConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput"></a>

```typescript
public readonly managedLoggingConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

---

##### `s3LoggingConfigurationInput`<sup>Optional</sup> <a name="s3LoggingConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput"></a>

```typescript
public readonly s3LoggingConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation">resetLogLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetLogLocation` <a name="resetLogLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation"></a>

```typescript
public resetLogLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput">logLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation">logLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `logLocationInput`<sup>Optional</sup> <a name="logLocationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput"></a>

```typescript
public readonly logLocationInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `logLocation`<sup>Required</sup> <a name="logLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation"></a>

```typescript
public readonly logLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putCustomerContentEncryptionConfiguration">putCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineConfiguration">putEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineVersion">putEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putManagedQueryResultsConfiguration">putManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putMonitoringConfiguration">putMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putResultConfiguration">putResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetAdditionalConfiguration">resetAdditionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetBytesScannedCutoffPerQuery">resetBytesScannedCutoffPerQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetCustomerContentEncryptionConfiguration">resetCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEnforceWorkGroupConfiguration">resetEnforceWorkGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEngineConfiguration">resetEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetExecutionRole">resetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetManagedQueryResultsConfiguration">resetManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetMonitoringConfiguration">resetMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetPublishCloudwatchMetricsEnabled">resetPublishCloudwatchMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetRequesterPaysEnabled">resetRequesterPaysEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetResultConfiguration">resetResultConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerContentEncryptionConfiguration` <a name="putCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putCustomerContentEncryptionConfiguration"></a>

```typescript
public putCustomerContentEncryptionConfiguration(value: AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putCustomerContentEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a>

---

##### `putEngineConfiguration` <a name="putEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineConfiguration"></a>

```typescript
public putEngineConfiguration(value: AthenaWorkGroupWorkGroupConfigurationEngineConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a>

---

##### `putEngineVersion` <a name="putEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineVersion"></a>

```typescript
public putEngineVersion(value: AthenaWorkGroupWorkGroupConfigurationEngineVersion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a>

---

##### `putManagedQueryResultsConfiguration` <a name="putManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putManagedQueryResultsConfiguration"></a>

```typescript
public putManagedQueryResultsConfiguration(value: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putManagedQueryResultsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a>

---

##### `putMonitoringConfiguration` <a name="putMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putMonitoringConfiguration"></a>

```typescript
public putMonitoringConfiguration(value: AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putMonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a>

---

##### `putResultConfiguration` <a name="putResultConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putResultConfiguration"></a>

```typescript
public putResultConfiguration(value: AthenaWorkGroupWorkGroupConfigurationResultConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putResultConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a>

---

##### `resetAdditionalConfiguration` <a name="resetAdditionalConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetAdditionalConfiguration"></a>

```typescript
public resetAdditionalConfiguration(): void
```

##### `resetBytesScannedCutoffPerQuery` <a name="resetBytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetBytesScannedCutoffPerQuery"></a>

```typescript
public resetBytesScannedCutoffPerQuery(): void
```

##### `resetCustomerContentEncryptionConfiguration` <a name="resetCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetCustomerContentEncryptionConfiguration"></a>

```typescript
public resetCustomerContentEncryptionConfiguration(): void
```

##### `resetEnforceWorkGroupConfiguration` <a name="resetEnforceWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEnforceWorkGroupConfiguration"></a>

```typescript
public resetEnforceWorkGroupConfiguration(): void
```

##### `resetEngineConfiguration` <a name="resetEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEngineConfiguration"></a>

```typescript
public resetEngineConfiguration(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetExecutionRole` <a name="resetExecutionRole" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetExecutionRole"></a>

```typescript
public resetExecutionRole(): void
```

##### `resetManagedQueryResultsConfiguration` <a name="resetManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetManagedQueryResultsConfiguration"></a>

```typescript
public resetManagedQueryResultsConfiguration(): void
```

##### `resetMonitoringConfiguration` <a name="resetMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetMonitoringConfiguration"></a>

```typescript
public resetMonitoringConfiguration(): void
```

##### `resetPublishCloudwatchMetricsEnabled` <a name="resetPublishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetPublishCloudwatchMetricsEnabled"></a>

```typescript
public resetPublishCloudwatchMetricsEnabled(): void
```

##### `resetRequesterPaysEnabled` <a name="resetRequesterPaysEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetRequesterPaysEnabled"></a>

```typescript
public resetRequesterPaysEnabled(): void
```

##### `resetResultConfiguration` <a name="resetResultConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetResultConfiguration"></a>

```typescript
public resetResultConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.customerContentEncryptionConfiguration">customerContentEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineConfiguration">engineConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineVersion">engineVersion</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference">AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.managedQueryResultsConfiguration">managedQueryResultsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.monitoringConfiguration">monitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.resultConfiguration">resultConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.additionalConfigurationInput">additionalConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.bytesScannedCutoffPerQueryInput">bytesScannedCutoffPerQueryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.customerContentEncryptionConfigurationInput">customerContentEncryptionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.enforceWorkGroupConfigurationInput">enforceWorkGroupConfigurationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineConfigurationInput">engineConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineVersionInput">engineVersionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.executionRoleInput">executionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.managedQueryResultsConfigurationInput">managedQueryResultsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.monitoringConfigurationInput">monitoringConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabledInput">publishCloudwatchMetricsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.requesterPaysEnabledInput">requesterPaysEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.resultConfigurationInput">resultConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.additionalConfiguration">additionalConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery">bytesScannedCutoffPerQuery</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.enforceWorkGroupConfiguration">enforceWorkGroupConfiguration</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled">publishCloudwatchMetricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.requesterPaysEnabled">requesterPaysEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerContentEncryptionConfiguration`<sup>Required</sup> <a name="customerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.customerContentEncryptionConfiguration"></a>

```typescript
public readonly customerContentEncryptionConfiguration: AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference</a>

---

##### `engineConfiguration`<sup>Required</sup> <a name="engineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineConfiguration"></a>

```typescript
public readonly engineConfiguration: AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference</a>

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineVersion"></a>

```typescript
public readonly engineVersion: AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference">AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference</a>

---

##### `managedQueryResultsConfiguration`<sup>Required</sup> <a name="managedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.managedQueryResultsConfiguration"></a>

```typescript
public readonly managedQueryResultsConfiguration: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference</a>

---

##### `monitoringConfiguration`<sup>Required</sup> <a name="monitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.monitoringConfiguration"></a>

```typescript
public readonly monitoringConfiguration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference</a>

---

##### `resultConfiguration`<sup>Required</sup> <a name="resultConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.resultConfiguration"></a>

```typescript
public readonly resultConfiguration: AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference</a>

---

##### `additionalConfigurationInput`<sup>Optional</sup> <a name="additionalConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.additionalConfigurationInput"></a>

```typescript
public readonly additionalConfigurationInput: string;
```

- *Type:* string

---

##### `bytesScannedCutoffPerQueryInput`<sup>Optional</sup> <a name="bytesScannedCutoffPerQueryInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.bytesScannedCutoffPerQueryInput"></a>

```typescript
public readonly bytesScannedCutoffPerQueryInput: number;
```

- *Type:* number

---

##### `customerContentEncryptionConfigurationInput`<sup>Optional</sup> <a name="customerContentEncryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.customerContentEncryptionConfigurationInput"></a>

```typescript
public readonly customerContentEncryptionConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a>

---

##### `enforceWorkGroupConfigurationInput`<sup>Optional</sup> <a name="enforceWorkGroupConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.enforceWorkGroupConfigurationInput"></a>

```typescript
public readonly enforceWorkGroupConfigurationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `engineConfigurationInput`<sup>Optional</sup> <a name="engineConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineConfigurationInput"></a>

```typescript
public readonly engineConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationEngineConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a>

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationEngineVersion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a>

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.executionRoleInput"></a>

```typescript
public readonly executionRoleInput: string;
```

- *Type:* string

---

##### `managedQueryResultsConfigurationInput`<sup>Optional</sup> <a name="managedQueryResultsConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.managedQueryResultsConfigurationInput"></a>

```typescript
public readonly managedQueryResultsConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a>

---

##### `monitoringConfigurationInput`<sup>Optional</sup> <a name="monitoringConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.monitoringConfigurationInput"></a>

```typescript
public readonly monitoringConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a>

---

##### `publishCloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="publishCloudwatchMetricsEnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabledInput"></a>

```typescript
public readonly publishCloudwatchMetricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `requesterPaysEnabledInput`<sup>Optional</sup> <a name="requesterPaysEnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.requesterPaysEnabledInput"></a>

```typescript
public readonly requesterPaysEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resultConfigurationInput`<sup>Optional</sup> <a name="resultConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.resultConfigurationInput"></a>

```typescript
public readonly resultConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationResultConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a>

---

##### `additionalConfiguration`<sup>Required</sup> <a name="additionalConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.additionalConfiguration"></a>

```typescript
public readonly additionalConfiguration: string;
```

- *Type:* string

---

##### `bytesScannedCutoffPerQuery`<sup>Required</sup> <a name="bytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery"></a>

```typescript
public readonly bytesScannedCutoffPerQuery: number;
```

- *Type:* number

---

##### `enforceWorkGroupConfiguration`<sup>Required</sup> <a name="enforceWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.enforceWorkGroupConfiguration"></a>

```typescript
public readonly enforceWorkGroupConfiguration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `publishCloudwatchMetricsEnabled`<sup>Required</sup> <a name="publishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled"></a>

```typescript
public readonly publishCloudwatchMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `requesterPaysEnabled`<sup>Required</sup> <a name="requesterPaysEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.requesterPaysEnabled"></a>

```typescript
public readonly requesterPaysEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resetS3AclOption">resetS3AclOption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3AclOption` <a name="resetS3AclOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resetS3AclOption"></a>

```typescript
public resetS3AclOption(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOptionInput">s3AclOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption">s3AclOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3AclOptionInput`<sup>Optional</sup> <a name="s3AclOptionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOptionInput"></a>

```typescript
public readonly s3AclOptionInput: string;
```

- *Type:* string

---

##### `s3AclOption`<sup>Required</sup> <a name="s3AclOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption"></a>

```typescript
public readonly s3AclOption: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetEncryptionOption">resetEncryptionOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionOption` <a name="resetEncryptionOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetEncryptionOption"></a>

```typescript
public resetEncryptionOption(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOptionInput">encryptionOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption">encryptionOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionOptionInput`<sup>Optional</sup> <a name="encryptionOptionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOptionInput"></a>

```typescript
public readonly encryptionOptionInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `encryptionOption`<sup>Required</sup> <a name="encryptionOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption"></a>

```typescript
public readonly encryptionOption: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putAclConfiguration">putAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetAclConfiguration">resetAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetOutputLocation">resetOutputLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAclConfiguration` <a name="putAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putAclConfiguration"></a>

```typescript
public putAclConfiguration(value: AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putAclConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a>

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration"></a>

```typescript
public putEncryptionConfiguration(value: AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a>

---

##### `resetAclConfiguration` <a name="resetAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetAclConfiguration"></a>

```typescript
public resetAclConfiguration(): void
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetEncryptionConfiguration"></a>

```typescript
public resetEncryptionConfiguration(): void
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetExpectedBucketOwner"></a>

```typescript
public resetExpectedBucketOwner(): void
```

##### `resetOutputLocation` <a name="resetOutputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetOutputLocation"></a>

```typescript
public resetOutputLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.aclConfiguration">aclConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.aclConfigurationInput">aclConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.outputLocationInput">outputLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.outputLocation">outputLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aclConfiguration`<sup>Required</sup> <a name="aclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.aclConfiguration"></a>

```typescript
public readonly aclConfiguration: AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference</a>

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a>

---

##### `aclConfigurationInput`<sup>Optional</sup> <a name="aclConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.aclConfigurationInput"></a>

```typescript
public readonly aclConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a>

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```typescript
public readonly encryptionConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a>

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwnerInput"></a>

```typescript
public readonly expectedBucketOwnerInput: string;
```

- *Type:* string

---

##### `outputLocationInput`<sup>Optional</sup> <a name="outputLocationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.outputLocationInput"></a>

```typescript
public readonly outputLocationInput: string;
```

- *Type:* string

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.outputLocation"></a>

```typescript
public readonly outputLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationResultConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.get"></a>

```typescript
public get(index: number): AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>[]

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.putClassifications">putClassifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetAdditionalConfigs">resetAdditionalConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetClassifications">resetClassifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetCoordinatorDpuSize">resetCoordinatorDpuSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetDefaultExecutorDpuSize">resetDefaultExecutorDpuSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetMaxConcurrentDpus">resetMaxConcurrentDpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetSparkProperties">resetSparkProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClassifications` <a name="putClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.putClassifications"></a>

```typescript
public putClassifications(value: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.putClassifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>[]

---

##### `resetAdditionalConfigs` <a name="resetAdditionalConfigs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetAdditionalConfigs"></a>

```typescript
public resetAdditionalConfigs(): void
```

##### `resetClassifications` <a name="resetClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetClassifications"></a>

```typescript
public resetClassifications(): void
```

##### `resetCoordinatorDpuSize` <a name="resetCoordinatorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetCoordinatorDpuSize"></a>

```typescript
public resetCoordinatorDpuSize(): void
```

##### `resetDefaultExecutorDpuSize` <a name="resetDefaultExecutorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetDefaultExecutorDpuSize"></a>

```typescript
public resetDefaultExecutorDpuSize(): void
```

##### `resetMaxConcurrentDpus` <a name="resetMaxConcurrentDpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetMaxConcurrentDpus"></a>

```typescript
public resetMaxConcurrentDpus(): void
```

##### `resetSparkProperties` <a name="resetSparkProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetSparkProperties"></a>

```typescript
public resetSparkProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.classifications">classifications</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.additionalConfigsInput">additionalConfigsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.classificationsInput">classificationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.coordinatorDpuSizeInput">coordinatorDpuSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.defaultExecutorDpuSizeInput">defaultExecutorDpuSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.maxConcurrentDpusInput">maxConcurrentDpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.sparkPropertiesInput">sparkPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.additionalConfigs">additionalConfigs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.coordinatorDpuSize">coordinatorDpuSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.defaultExecutorDpuSize">defaultExecutorDpuSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.maxConcurrentDpus">maxConcurrentDpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.sparkProperties">sparkProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classifications`<sup>Required</sup> <a name="classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.classifications"></a>

```typescript
public readonly classifications: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList</a>

---

##### `additionalConfigsInput`<sup>Optional</sup> <a name="additionalConfigsInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.additionalConfigsInput"></a>

```typescript
public readonly additionalConfigsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `classificationsInput`<sup>Optional</sup> <a name="classificationsInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.classificationsInput"></a>

```typescript
public readonly classificationsInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>[]

---

##### `coordinatorDpuSizeInput`<sup>Optional</sup> <a name="coordinatorDpuSizeInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.coordinatorDpuSizeInput"></a>

```typescript
public readonly coordinatorDpuSizeInput: number;
```

- *Type:* number

---

##### `defaultExecutorDpuSizeInput`<sup>Optional</sup> <a name="defaultExecutorDpuSizeInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.defaultExecutorDpuSizeInput"></a>

```typescript
public readonly defaultExecutorDpuSizeInput: number;
```

- *Type:* number

---

##### `maxConcurrentDpusInput`<sup>Optional</sup> <a name="maxConcurrentDpusInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.maxConcurrentDpusInput"></a>

```typescript
public readonly maxConcurrentDpusInput: number;
```

- *Type:* number

---

##### `sparkPropertiesInput`<sup>Optional</sup> <a name="sparkPropertiesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.sparkPropertiesInput"></a>

```typescript
public readonly sparkPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `additionalConfigs`<sup>Required</sup> <a name="additionalConfigs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.additionalConfigs"></a>

```typescript
public readonly additionalConfigs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `coordinatorDpuSize`<sup>Required</sup> <a name="coordinatorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.coordinatorDpuSize"></a>

```typescript
public readonly coordinatorDpuSize: number;
```

- *Type:* number

---

##### `defaultExecutorDpuSize`<sup>Required</sup> <a name="defaultExecutorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.defaultExecutorDpuSize"></a>

```typescript
public readonly defaultExecutorDpuSize: number;
```

- *Type:* number

---

##### `maxConcurrentDpus`<sup>Required</sup> <a name="maxConcurrentDpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.maxConcurrentDpus"></a>

```typescript
public readonly maxConcurrentDpus: number;
```

- *Type:* number

---

##### `sparkProperties`<sup>Required</sup> <a name="sparkProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.sparkProperties"></a>

```typescript
public readonly sparkProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resetSelectedEngineVersion">resetSelectedEngineVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSelectedEngineVersion` <a name="resetSelectedEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resetSelectedEngineVersion"></a>

```typescript
public resetSelectedEngineVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.effectiveEngineVersion">effectiveEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.selectedEngineVersionInput">selectedEngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.selectedEngineVersion">selectedEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveEngineVersion`<sup>Required</sup> <a name="effectiveEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.effectiveEngineVersion"></a>

```typescript
public readonly effectiveEngineVersion: string;
```

- *Type:* string

---

##### `selectedEngineVersionInput`<sup>Optional</sup> <a name="selectedEngineVersionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.selectedEngineVersionInput"></a>

```typescript
public readonly selectedEngineVersionInput: string;
```

- *Type:* string

---

##### `selectedEngineVersion`<sup>Required</sup> <a name="selectedEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.selectedEngineVersion"></a>

```typescript
public readonly selectedEngineVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration"></a>

```typescript
public putEncryptionConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration"></a>

```typescript
public resetEncryptionConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```typescript
public readonly encryptionConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix">resetLogStreamNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogTypes">resetLogTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogGroup"></a>

```typescript
public resetLogGroup(): void
```

##### `resetLogStreamNamePrefix` <a name="resetLogStreamNamePrefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix"></a>

```typescript
public resetLogStreamNamePrefix(): void
```

##### `resetLogTypes` <a name="resetLogTypes" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogTypes"></a>

```typescript
public resetLogTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput">logStreamNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypesInput">logTypesInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix">logStreamNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes">logTypes</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupInput"></a>

```typescript
public readonly logGroupInput: string;
```

- *Type:* string

---

##### `logStreamNamePrefixInput`<sup>Optional</sup> <a name="logStreamNamePrefixInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput"></a>

```typescript
public readonly logStreamNamePrefixInput: string;
```

- *Type:* string

---

##### `logTypesInput`<sup>Optional</sup> <a name="logTypesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypesInput"></a>

```typescript
public readonly logTypesInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `logStreamNamePrefix`<sup>Required</sup> <a name="logStreamNamePrefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix"></a>

```typescript
public readonly logStreamNamePrefix: string;
```

- *Type:* string

---

##### `logTypes`<sup>Required</sup> <a name="logTypes" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes"></a>

```typescript
public readonly logTypes: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration">putCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putManagedLoggingConfiguration">putManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putS3LoggingConfiguration">putS3LoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetCloudwatchLoggingConfiguration">resetCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration">resetManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetS3LoggingConfiguration">resetS3LoggingConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLoggingConfiguration` <a name="putCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration"></a>

```typescript
public putCloudwatchLoggingConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---

##### `putManagedLoggingConfiguration` <a name="putManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putManagedLoggingConfiguration"></a>

```typescript
public putManagedLoggingConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putManagedLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a>

---

##### `putS3LoggingConfiguration` <a name="putS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putS3LoggingConfiguration"></a>

```typescript
public putS3LoggingConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putS3LoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a>

---

##### `resetCloudwatchLoggingConfiguration` <a name="resetCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetCloudwatchLoggingConfiguration"></a>

```typescript
public resetCloudwatchLoggingConfiguration(): void
```

##### `resetManagedLoggingConfiguration` <a name="resetManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration"></a>

```typescript
public resetManagedLoggingConfiguration(): void
```

##### `resetS3LoggingConfiguration` <a name="resetS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetS3LoggingConfiguration"></a>

```typescript
public resetS3LoggingConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration">cloudwatchLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.managedLoggingConfiguration">managedLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.s3LoggingConfiguration">s3LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfigurationInput">cloudwatchLoggingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput">managedLoggingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput">s3LoggingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLoggingConfiguration`<sup>Required</sup> <a name="cloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration"></a>

```typescript
public readonly cloudwatchLoggingConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a>

---

##### `managedLoggingConfiguration`<sup>Required</sup> <a name="managedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.managedLoggingConfiguration"></a>

```typescript
public readonly managedLoggingConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference</a>

---

##### `s3LoggingConfiguration`<sup>Required</sup> <a name="s3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.s3LoggingConfiguration"></a>

```typescript
public readonly s3LoggingConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference</a>

---

##### `cloudwatchLoggingConfigurationInput`<sup>Optional</sup> <a name="cloudwatchLoggingConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfigurationInput"></a>

```typescript
public readonly cloudwatchLoggingConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---

##### `managedLoggingConfigurationInput`<sup>Optional</sup> <a name="managedLoggingConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput"></a>

```typescript
public readonly managedLoggingConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a>

---

##### `s3LoggingConfigurationInput`<sup>Optional</sup> <a name="s3LoggingConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput"></a>

```typescript
public readonly s3LoggingConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation">resetLogLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetLogLocation` <a name="resetLogLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation"></a>

```typescript
public resetLogLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput">logLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation">logLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `logLocationInput`<sup>Optional</sup> <a name="logLocationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput"></a>

```typescript
public readonly logLocationInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `logLocation`<sup>Required</sup> <a name="logLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation"></a>

```typescript
public readonly logLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putCustomerContentEncryptionConfiguration">putCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineConfiguration">putEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineVersion">putEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putManagedQueryResultsConfiguration">putManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putMonitoringConfiguration">putMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putResultConfigurationUpdates">putResultConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetAdditionalConfiguration">resetAdditionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetBytesScannedCutoffPerQuery">resetBytesScannedCutoffPerQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetCustomerContentEncryptionConfiguration">resetCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEnforceWorkGroupConfiguration">resetEnforceWorkGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEngineConfiguration">resetEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetExecutionRole">resetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetManagedQueryResultsConfiguration">resetManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetMonitoringConfiguration">resetMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetPublishCloudwatchMetricsEnabled">resetPublishCloudwatchMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRemoveBytesScannedCutoffPerQuery">resetRemoveBytesScannedCutoffPerQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRemoveCustomerContentEncryptionConfiguration">resetRemoveCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRequesterPaysEnabled">resetRequesterPaysEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetResultConfigurationUpdates">resetResultConfigurationUpdates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerContentEncryptionConfiguration` <a name="putCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putCustomerContentEncryptionConfiguration"></a>

```typescript
public putCustomerContentEncryptionConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putCustomerContentEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a>

---

##### `putEngineConfiguration` <a name="putEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineConfiguration"></a>

```typescript
public putEngineConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a>

---

##### `putEngineVersion` <a name="putEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineVersion"></a>

```typescript
public putEngineVersion(value: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a>

---

##### `putManagedQueryResultsConfiguration` <a name="putManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putManagedQueryResultsConfiguration"></a>

```typescript
public putManagedQueryResultsConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putManagedQueryResultsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a>

---

##### `putMonitoringConfiguration` <a name="putMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putMonitoringConfiguration"></a>

```typescript
public putMonitoringConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putMonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a>

---

##### `putResultConfigurationUpdates` <a name="putResultConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putResultConfigurationUpdates"></a>

```typescript
public putResultConfigurationUpdates(value: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putResultConfigurationUpdates.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a>

---

##### `resetAdditionalConfiguration` <a name="resetAdditionalConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetAdditionalConfiguration"></a>

```typescript
public resetAdditionalConfiguration(): void
```

##### `resetBytesScannedCutoffPerQuery` <a name="resetBytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetBytesScannedCutoffPerQuery"></a>

```typescript
public resetBytesScannedCutoffPerQuery(): void
```

##### `resetCustomerContentEncryptionConfiguration` <a name="resetCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetCustomerContentEncryptionConfiguration"></a>

```typescript
public resetCustomerContentEncryptionConfiguration(): void
```

##### `resetEnforceWorkGroupConfiguration` <a name="resetEnforceWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEnforceWorkGroupConfiguration"></a>

```typescript
public resetEnforceWorkGroupConfiguration(): void
```

##### `resetEngineConfiguration` <a name="resetEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEngineConfiguration"></a>

```typescript
public resetEngineConfiguration(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetExecutionRole` <a name="resetExecutionRole" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetExecutionRole"></a>

```typescript
public resetExecutionRole(): void
```

##### `resetManagedQueryResultsConfiguration` <a name="resetManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetManagedQueryResultsConfiguration"></a>

```typescript
public resetManagedQueryResultsConfiguration(): void
```

##### `resetMonitoringConfiguration` <a name="resetMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetMonitoringConfiguration"></a>

```typescript
public resetMonitoringConfiguration(): void
```

##### `resetPublishCloudwatchMetricsEnabled` <a name="resetPublishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetPublishCloudwatchMetricsEnabled"></a>

```typescript
public resetPublishCloudwatchMetricsEnabled(): void
```

##### `resetRemoveBytesScannedCutoffPerQuery` <a name="resetRemoveBytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRemoveBytesScannedCutoffPerQuery"></a>

```typescript
public resetRemoveBytesScannedCutoffPerQuery(): void
```

##### `resetRemoveCustomerContentEncryptionConfiguration` <a name="resetRemoveCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRemoveCustomerContentEncryptionConfiguration"></a>

```typescript
public resetRemoveCustomerContentEncryptionConfiguration(): void
```

##### `resetRequesterPaysEnabled` <a name="resetRequesterPaysEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRequesterPaysEnabled"></a>

```typescript
public resetRequesterPaysEnabled(): void
```

##### `resetResultConfigurationUpdates` <a name="resetResultConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetResultConfigurationUpdates"></a>

```typescript
public resetResultConfigurationUpdates(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.customerContentEncryptionConfiguration">customerContentEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineConfiguration">engineConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineVersion">engineVersion</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.managedQueryResultsConfiguration">managedQueryResultsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.monitoringConfiguration">monitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.resultConfigurationUpdates">resultConfigurationUpdates</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.additionalConfigurationInput">additionalConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.bytesScannedCutoffPerQueryInput">bytesScannedCutoffPerQueryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.customerContentEncryptionConfigurationInput">customerContentEncryptionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.enforceWorkGroupConfigurationInput">enforceWorkGroupConfigurationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineConfigurationInput">engineConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineVersionInput">engineVersionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.executionRoleInput">executionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.managedQueryResultsConfigurationInput">managedQueryResultsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.monitoringConfigurationInput">monitoringConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.publishCloudwatchMetricsEnabledInput">publishCloudwatchMetricsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeBytesScannedCutoffPerQueryInput">removeBytesScannedCutoffPerQueryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeCustomerContentEncryptionConfigurationInput">removeCustomerContentEncryptionConfigurationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.requesterPaysEnabledInput">requesterPaysEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.resultConfigurationUpdatesInput">resultConfigurationUpdatesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.additionalConfiguration">additionalConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.bytesScannedCutoffPerQuery">bytesScannedCutoffPerQuery</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.enforceWorkGroupConfiguration">enforceWorkGroupConfiguration</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.publishCloudwatchMetricsEnabled">publishCloudwatchMetricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeBytesScannedCutoffPerQuery">removeBytesScannedCutoffPerQuery</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeCustomerContentEncryptionConfiguration">removeCustomerContentEncryptionConfiguration</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.requesterPaysEnabled">requesterPaysEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerContentEncryptionConfiguration`<sup>Required</sup> <a name="customerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.customerContentEncryptionConfiguration"></a>

```typescript
public readonly customerContentEncryptionConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference</a>

---

##### `engineConfiguration`<sup>Required</sup> <a name="engineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineConfiguration"></a>

```typescript
public readonly engineConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference</a>

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineVersion"></a>

```typescript
public readonly engineVersion: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference</a>

---

##### `managedQueryResultsConfiguration`<sup>Required</sup> <a name="managedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.managedQueryResultsConfiguration"></a>

```typescript
public readonly managedQueryResultsConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference</a>

---

##### `monitoringConfiguration`<sup>Required</sup> <a name="monitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.monitoringConfiguration"></a>

```typescript
public readonly monitoringConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference</a>

---

##### `resultConfigurationUpdates`<sup>Required</sup> <a name="resultConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.resultConfigurationUpdates"></a>

```typescript
public readonly resultConfigurationUpdates: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference</a>

---

##### `additionalConfigurationInput`<sup>Optional</sup> <a name="additionalConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.additionalConfigurationInput"></a>

```typescript
public readonly additionalConfigurationInput: string;
```

- *Type:* string

---

##### `bytesScannedCutoffPerQueryInput`<sup>Optional</sup> <a name="bytesScannedCutoffPerQueryInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.bytesScannedCutoffPerQueryInput"></a>

```typescript
public readonly bytesScannedCutoffPerQueryInput: number;
```

- *Type:* number

---

##### `customerContentEncryptionConfigurationInput`<sup>Optional</sup> <a name="customerContentEncryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.customerContentEncryptionConfigurationInput"></a>

```typescript
public readonly customerContentEncryptionConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a>

---

##### `enforceWorkGroupConfigurationInput`<sup>Optional</sup> <a name="enforceWorkGroupConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.enforceWorkGroupConfigurationInput"></a>

```typescript
public readonly enforceWorkGroupConfigurationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `engineConfigurationInput`<sup>Optional</sup> <a name="engineConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineConfigurationInput"></a>

```typescript
public readonly engineConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a>

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a>

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.executionRoleInput"></a>

```typescript
public readonly executionRoleInput: string;
```

- *Type:* string

---

##### `managedQueryResultsConfigurationInput`<sup>Optional</sup> <a name="managedQueryResultsConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.managedQueryResultsConfigurationInput"></a>

```typescript
public readonly managedQueryResultsConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a>

---

##### `monitoringConfigurationInput`<sup>Optional</sup> <a name="monitoringConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.monitoringConfigurationInput"></a>

```typescript
public readonly monitoringConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a>

---

##### `publishCloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="publishCloudwatchMetricsEnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.publishCloudwatchMetricsEnabledInput"></a>

```typescript
public readonly publishCloudwatchMetricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `removeBytesScannedCutoffPerQueryInput`<sup>Optional</sup> <a name="removeBytesScannedCutoffPerQueryInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeBytesScannedCutoffPerQueryInput"></a>

```typescript
public readonly removeBytesScannedCutoffPerQueryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `removeCustomerContentEncryptionConfigurationInput`<sup>Optional</sup> <a name="removeCustomerContentEncryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeCustomerContentEncryptionConfigurationInput"></a>

```typescript
public readonly removeCustomerContentEncryptionConfigurationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `requesterPaysEnabledInput`<sup>Optional</sup> <a name="requesterPaysEnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.requesterPaysEnabledInput"></a>

```typescript
public readonly requesterPaysEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resultConfigurationUpdatesInput`<sup>Optional</sup> <a name="resultConfigurationUpdatesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.resultConfigurationUpdatesInput"></a>

```typescript
public readonly resultConfigurationUpdatesInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a>

---

##### `additionalConfiguration`<sup>Required</sup> <a name="additionalConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.additionalConfiguration"></a>

```typescript
public readonly additionalConfiguration: string;
```

- *Type:* string

---

##### `bytesScannedCutoffPerQuery`<sup>Required</sup> <a name="bytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.bytesScannedCutoffPerQuery"></a>

```typescript
public readonly bytesScannedCutoffPerQuery: number;
```

- *Type:* number

---

##### `enforceWorkGroupConfiguration`<sup>Required</sup> <a name="enforceWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.enforceWorkGroupConfiguration"></a>

```typescript
public readonly enforceWorkGroupConfiguration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `publishCloudwatchMetricsEnabled`<sup>Required</sup> <a name="publishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.publishCloudwatchMetricsEnabled"></a>

```typescript
public readonly publishCloudwatchMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `removeBytesScannedCutoffPerQuery`<sup>Required</sup> <a name="removeBytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeBytesScannedCutoffPerQuery"></a>

```typescript
public readonly removeBytesScannedCutoffPerQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `removeCustomerContentEncryptionConfiguration`<sup>Required</sup> <a name="removeCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeCustomerContentEncryptionConfiguration"></a>

```typescript
public readonly removeCustomerContentEncryptionConfiguration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `requesterPaysEnabled`<sup>Required</sup> <a name="requesterPaysEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.requesterPaysEnabled"></a>

```typescript
public readonly requesterPaysEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdates;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resetS3AclOption">resetS3AclOption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3AclOption` <a name="resetS3AclOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resetS3AclOption"></a>

```typescript
public resetS3AclOption(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.s3AclOptionInput">s3AclOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.s3AclOption">s3AclOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3AclOptionInput`<sup>Optional</sup> <a name="s3AclOptionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.s3AclOptionInput"></a>

```typescript
public readonly s3AclOptionInput: string;
```

- *Type:* string

---

##### `s3AclOption`<sup>Required</sup> <a name="s3AclOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.s3AclOption"></a>

```typescript
public readonly s3AclOption: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resetEncryptionOption">resetEncryptionOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionOption` <a name="resetEncryptionOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resetEncryptionOption"></a>

```typescript
public resetEncryptionOption(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.encryptionOptionInput">encryptionOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.encryptionOption">encryptionOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionOptionInput`<sup>Optional</sup> <a name="encryptionOptionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.encryptionOptionInput"></a>

```typescript
public readonly encryptionOptionInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `encryptionOption`<sup>Required</sup> <a name="encryptionOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.encryptionOption"></a>

```typescript
public readonly encryptionOption: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer"></a>

```typescript
import { athenaWorkGroup } from '@cdktn/provider-awscc'

new athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putAclConfiguration">putAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetAclConfiguration">resetAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetOutputLocation">resetOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveAclConfiguration">resetRemoveAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveEncryptionConfiguration">resetRemoveEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveExpectedBucketOwner">resetRemoveExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveOutputLocation">resetRemoveOutputLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAclConfiguration` <a name="putAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putAclConfiguration"></a>

```typescript
public putAclConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putAclConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a>

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putEncryptionConfiguration"></a>

```typescript
public putEncryptionConfiguration(value: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a>

---

##### `resetAclConfiguration` <a name="resetAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetAclConfiguration"></a>

```typescript
public resetAclConfiguration(): void
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetEncryptionConfiguration"></a>

```typescript
public resetEncryptionConfiguration(): void
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetExpectedBucketOwner"></a>

```typescript
public resetExpectedBucketOwner(): void
```

##### `resetOutputLocation` <a name="resetOutputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetOutputLocation"></a>

```typescript
public resetOutputLocation(): void
```

##### `resetRemoveAclConfiguration` <a name="resetRemoveAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveAclConfiguration"></a>

```typescript
public resetRemoveAclConfiguration(): void
```

##### `resetRemoveEncryptionConfiguration` <a name="resetRemoveEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveEncryptionConfiguration"></a>

```typescript
public resetRemoveEncryptionConfiguration(): void
```

##### `resetRemoveExpectedBucketOwner` <a name="resetRemoveExpectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveExpectedBucketOwner"></a>

```typescript
public resetRemoveExpectedBucketOwner(): void
```

##### `resetRemoveOutputLocation` <a name="resetRemoveOutputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveOutputLocation"></a>

```typescript
public resetRemoveOutputLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.aclConfiguration">aclConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.aclConfigurationInput">aclConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.outputLocationInput">outputLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeAclConfigurationInput">removeAclConfigurationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeEncryptionConfigurationInput">removeEncryptionConfigurationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeExpectedBucketOwnerInput">removeExpectedBucketOwnerInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeOutputLocationInput">removeOutputLocationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.outputLocation">outputLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeAclConfiguration">removeAclConfiguration</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeEncryptionConfiguration">removeEncryptionConfiguration</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeExpectedBucketOwner">removeExpectedBucketOwner</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeOutputLocation">removeOutputLocation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aclConfiguration`<sup>Required</sup> <a name="aclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.aclConfiguration"></a>

```typescript
public readonly aclConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference</a>

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference</a>

---

##### `aclConfigurationInput`<sup>Optional</sup> <a name="aclConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.aclConfigurationInput"></a>

```typescript
public readonly aclConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a>

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.encryptionConfigurationInput"></a>

```typescript
public readonly encryptionConfigurationInput: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a>

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.expectedBucketOwnerInput"></a>

```typescript
public readonly expectedBucketOwnerInput: string;
```

- *Type:* string

---

##### `outputLocationInput`<sup>Optional</sup> <a name="outputLocationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.outputLocationInput"></a>

```typescript
public readonly outputLocationInput: string;
```

- *Type:* string

---

##### `removeAclConfigurationInput`<sup>Optional</sup> <a name="removeAclConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeAclConfigurationInput"></a>

```typescript
public readonly removeAclConfigurationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `removeEncryptionConfigurationInput`<sup>Optional</sup> <a name="removeEncryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeEncryptionConfigurationInput"></a>

```typescript
public readonly removeEncryptionConfigurationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `removeExpectedBucketOwnerInput`<sup>Optional</sup> <a name="removeExpectedBucketOwnerInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeExpectedBucketOwnerInput"></a>

```typescript
public readonly removeExpectedBucketOwnerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `removeOutputLocationInput`<sup>Optional</sup> <a name="removeOutputLocationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeOutputLocationInput"></a>

```typescript
public readonly removeOutputLocationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.outputLocation"></a>

```typescript
public readonly outputLocation: string;
```

- *Type:* string

---

##### `removeAclConfiguration`<sup>Required</sup> <a name="removeAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeAclConfiguration"></a>

```typescript
public readonly removeAclConfiguration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `removeEncryptionConfiguration`<sup>Required</sup> <a name="removeEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeEncryptionConfiguration"></a>

```typescript
public readonly removeEncryptionConfiguration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `removeExpectedBucketOwner`<sup>Required</sup> <a name="removeExpectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeExpectedBucketOwner"></a>

```typescript
public readonly removeExpectedBucketOwner: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `removeOutputLocation`<sup>Required</sup> <a name="removeOutputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeOutputLocation"></a>

```typescript
public readonly removeOutputLocation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a>

---



