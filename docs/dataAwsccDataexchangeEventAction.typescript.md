# `dataAwsccDataexchangeEventAction` Submodule <a name="`dataAwsccDataexchangeEventAction` Submodule" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDataexchangeEventAction <a name="DataAwsccDataexchangeEventAction" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/dataexchange_event_action awscc_dataexchange_event_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

new dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction(scope: Construct, id: string, config: DataAwsccDataexchangeEventActionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig">DataAwsccDataexchangeEventActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig">DataAwsccDataexchangeEventActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDataexchangeEventAction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isConstruct"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformElement"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformDataSource"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.generateConfigForImport"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDataexchangeEventAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDataexchangeEventAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDataexchangeEventAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/dataexchange_event_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDataexchangeEventAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference">DataAwsccDataexchangeEventActionActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.event">event</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference">DataAwsccDataexchangeEventActionEventOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.eventActionId">eventActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList">DataAwsccDataexchangeEventActionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.action"></a>

```typescript
public readonly action: DataAwsccDataexchangeEventActionActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference">DataAwsccDataexchangeEventActionActionOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.event"></a>

```typescript
public readonly event: DataAwsccDataexchangeEventActionEventOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference">DataAwsccDataexchangeEventActionEventOutputReference</a>

---

##### `eventActionId`<sup>Required</sup> <a name="eventActionId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.eventActionId"></a>

```typescript
public readonly eventActionId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.tags"></a>

```typescript
public readonly tags: DataAwsccDataexchangeEventActionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList">DataAwsccDataexchangeEventActionTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventAction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDataexchangeEventActionAction <a name="DataAwsccDataexchangeEventActionAction" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionAction.Initializer"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

const dataAwsccDataexchangeEventActionAction: dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionAction = { ... }
```


### DataAwsccDataexchangeEventActionActionExportRevisionToS3 <a name="DataAwsccDataexchangeEventActionActionExportRevisionToS3" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3.Initializer"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

const dataAwsccDataexchangeEventActionActionExportRevisionToS3: dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3 = { ... }
```


### DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption <a name="DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption.Initializer"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

const dataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption: dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption = { ... }
```


### DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination <a name="DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination.Initializer"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

const dataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination: dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination = { ... }
```


### DataAwsccDataexchangeEventActionConfig <a name="DataAwsccDataexchangeEventActionConfig" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.Initializer"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

const dataAwsccDataexchangeEventActionConfig: dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/dataexchange_event_action#id DataAwsccDataexchangeEventAction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDataexchangeEventActionEvent <a name="DataAwsccDataexchangeEventActionEvent" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEvent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEvent.Initializer"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

const dataAwsccDataexchangeEventActionEvent: dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEvent = { ... }
```


### DataAwsccDataexchangeEventActionEventRevisionPublished <a name="DataAwsccDataexchangeEventActionEventRevisionPublished" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublished"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublished.Initializer"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

const dataAwsccDataexchangeEventActionEventRevisionPublished: dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublished = { ... }
```


### DataAwsccDataexchangeEventActionTags <a name="DataAwsccDataexchangeEventActionTags" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTags.Initializer"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

const dataAwsccDataexchangeEventActionTags: dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference <a name="DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

new dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption">DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption">DataAwsccDataexchangeEventActionActionExportRevisionToS3Encryption</a>

---


### DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference <a name="DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

new dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference">DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestination">revisionDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference">DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3">DataAwsccDataexchangeEventActionActionExportRevisionToS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryption"></a>

```typescript
public readonly encryption: DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference">DataAwsccDataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference</a>

---

##### `revisionDestination`<sup>Required</sup> <a name="revisionDestination" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestination"></a>

```typescript
public readonly revisionDestination: DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference">DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDataexchangeEventActionActionExportRevisionToS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3">DataAwsccDataexchangeEventActionActionExportRevisionToS3</a>

---


### DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference <a name="DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

new dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPattern">keyPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `keyPattern`<sup>Required</sup> <a name="keyPattern" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPattern"></a>

```typescript
public readonly keyPattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination">DataAwsccDataexchangeEventActionActionExportRevisionToS3RevisionDestination</a>

---


### DataAwsccDataexchangeEventActionActionOutputReference <a name="DataAwsccDataexchangeEventActionActionOutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.Initializer"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

new dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.exportRevisionToS3">exportRevisionToS3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference">DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionAction">DataAwsccDataexchangeEventActionAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exportRevisionToS3`<sup>Required</sup> <a name="exportRevisionToS3" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.exportRevisionToS3"></a>

```typescript
public readonly exportRevisionToS3: DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference">DataAwsccDataexchangeEventActionActionExportRevisionToS3OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDataexchangeEventActionAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionAction">DataAwsccDataexchangeEventActionAction</a>

---


### DataAwsccDataexchangeEventActionEventOutputReference <a name="DataAwsccDataexchangeEventActionEventOutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.Initializer"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

new dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.revisionPublished">revisionPublished</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference">DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEvent">DataAwsccDataexchangeEventActionEvent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `revisionPublished`<sup>Required</sup> <a name="revisionPublished" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.revisionPublished"></a>

```typescript
public readonly revisionPublished: DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference">DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDataexchangeEventActionEvent;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEvent">DataAwsccDataexchangeEventActionEvent</a>

---


### DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference <a name="DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.Initializer"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

new dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetId">dataSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublished">DataAwsccDataexchangeEventActionEventRevisionPublished</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublishedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDataexchangeEventActionEventRevisionPublished;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionEventRevisionPublished">DataAwsccDataexchangeEventActionEventRevisionPublished</a>

---


### DataAwsccDataexchangeEventActionTagsList <a name="DataAwsccDataexchangeEventActionTagsList" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

new dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDataexchangeEventActionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDataexchangeEventActionTagsOutputReference <a name="DataAwsccDataexchangeEventActionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDataexchangeEventAction } from '@cdktn/provider-awscc'

new dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTags">DataAwsccDataexchangeEventActionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDataexchangeEventActionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDataexchangeEventAction.DataAwsccDataexchangeEventActionTags">DataAwsccDataexchangeEventActionTags</a>

---



