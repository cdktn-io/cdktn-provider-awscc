# `applicationsignalsGroupingConfiguration` Submodule <a name="`applicationsignalsGroupingConfiguration` Submodule" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationsignalsGroupingConfiguration <a name="ApplicationsignalsGroupingConfiguration" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration awscc_applicationsignals_grouping_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer"></a>

```typescript
import { applicationsignalsGroupingConfiguration } from '@cdktn/provider-awscc'

new applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration(scope: Construct, id: string, config: ApplicationsignalsGroupingConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig">ApplicationsignalsGroupingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig">ApplicationsignalsGroupingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.putGroupingAttributeDefinitions">putGroupingAttributeDefinitions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGroupingAttributeDefinitions` <a name="putGroupingAttributeDefinitions" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.putGroupingAttributeDefinitions"></a>

```typescript
public putGroupingAttributeDefinitions(value: IResolvable | ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.putGroupingAttributeDefinitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApplicationsignalsGroupingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isConstruct"></a>

```typescript
import { applicationsignalsGroupingConfiguration } from '@cdktn/provider-awscc'

applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformElement"></a>

```typescript
import { applicationsignalsGroupingConfiguration } from '@cdktn/provider-awscc'

applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformResource"></a>

```typescript
import { applicationsignalsGroupingConfiguration } from '@cdktn/provider-awscc'

applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.generateConfigForImport"></a>

```typescript
import { applicationsignalsGroupingConfiguration } from '@cdktn/provider-awscc'

applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApplicationsignalsGroupingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationsignalsGroupingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationsignalsGroupingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApplicationsignalsGroupingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.groupingAttributeDefinitions">groupingAttributeDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.groupingAttributeDefinitionsInput">groupingAttributeDefinitionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `groupingAttributeDefinitions`<sup>Required</sup> <a name="groupingAttributeDefinitions" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.groupingAttributeDefinitions"></a>

```typescript
public readonly groupingAttributeDefinitions: ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `groupingAttributeDefinitionsInput`<sup>Optional</sup> <a name="groupingAttributeDefinitionsInput" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.groupingAttributeDefinitionsInput"></a>

```typescript
public readonly groupingAttributeDefinitionsInput: IResolvable | ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationsignalsGroupingConfigurationConfig <a name="ApplicationsignalsGroupingConfigurationConfig" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.Initializer"></a>

```typescript
import { applicationsignalsGroupingConfiguration } from '@cdktn/provider-awscc'

const applicationsignalsGroupingConfigurationConfig: applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.groupingAttributeDefinitions">groupingAttributeDefinitions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#grouping_attribute_definitions ApplicationsignalsGroupingConfiguration#grouping_attribute_definitions}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `groupingAttributeDefinitions`<sup>Required</sup> <a name="groupingAttributeDefinitions" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.groupingAttributeDefinitions"></a>

```typescript
public readonly groupingAttributeDefinitions: IResolvable | ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#grouping_attribute_definitions ApplicationsignalsGroupingConfiguration#grouping_attribute_definitions}.

---

### ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions <a name="ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.Initializer"></a>

```typescript
import { applicationsignalsGroupingConfiguration } from '@cdktn/provider-awscc'

const applicationsignalsGroupingConfigurationGroupingAttributeDefinitions: applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.property.groupingName">groupingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#grouping_name ApplicationsignalsGroupingConfiguration#grouping_name}. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.property.groupingSourceKeys">groupingSourceKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#grouping_source_keys ApplicationsignalsGroupingConfiguration#grouping_source_keys}. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.property.defaultGroupingValue">defaultGroupingValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#default_grouping_value ApplicationsignalsGroupingConfiguration#default_grouping_value}. |

---

##### `groupingName`<sup>Required</sup> <a name="groupingName" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.property.groupingName"></a>

```typescript
public readonly groupingName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#grouping_name ApplicationsignalsGroupingConfiguration#grouping_name}.

---

##### `groupingSourceKeys`<sup>Required</sup> <a name="groupingSourceKeys" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.property.groupingSourceKeys"></a>

```typescript
public readonly groupingSourceKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#grouping_source_keys ApplicationsignalsGroupingConfiguration#grouping_source_keys}.

---

##### `defaultGroupingValue`<sup>Optional</sup> <a name="defaultGroupingValue" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.property.defaultGroupingValue"></a>

```typescript
public readonly defaultGroupingValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#default_grouping_value ApplicationsignalsGroupingConfiguration#default_grouping_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList <a name="ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer"></a>

```typescript
import { applicationsignalsGroupingConfiguration } from '@cdktn/provider-awscc'

new applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.get"></a>

```typescript
public get(index: number): ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>[]

---


### ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference <a name="ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer"></a>

```typescript
import { applicationsignalsGroupingConfiguration } from '@cdktn/provider-awscc'

new applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.resetDefaultGroupingValue">resetDefaultGroupingValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultGroupingValue` <a name="resetDefaultGroupingValue" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.resetDefaultGroupingValue"></a>

```typescript
public resetDefaultGroupingValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.defaultGroupingValueInput">defaultGroupingValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingNameInput">groupingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingSourceKeysInput">groupingSourceKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.defaultGroupingValue">defaultGroupingValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingName">groupingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingSourceKeys">groupingSourceKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultGroupingValueInput`<sup>Optional</sup> <a name="defaultGroupingValueInput" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.defaultGroupingValueInput"></a>

```typescript
public readonly defaultGroupingValueInput: string;
```

- *Type:* string

---

##### `groupingNameInput`<sup>Optional</sup> <a name="groupingNameInput" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingNameInput"></a>

```typescript
public readonly groupingNameInput: string;
```

- *Type:* string

---

##### `groupingSourceKeysInput`<sup>Optional</sup> <a name="groupingSourceKeysInput" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingSourceKeysInput"></a>

```typescript
public readonly groupingSourceKeysInput: string[];
```

- *Type:* string[]

---

##### `defaultGroupingValue`<sup>Required</sup> <a name="defaultGroupingValue" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.defaultGroupingValue"></a>

```typescript
public readonly defaultGroupingValue: string;
```

- *Type:* string

---

##### `groupingName`<sup>Required</sup> <a name="groupingName" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingName"></a>

```typescript
public readonly groupingName: string;
```

- *Type:* string

---

##### `groupingSourceKeys`<sup>Required</sup> <a name="groupingSourceKeys" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingSourceKeys"></a>

```typescript
public readonly groupingSourceKeys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>

---



