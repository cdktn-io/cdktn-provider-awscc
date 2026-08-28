# `dataAwsccMediapackagev2ChannelGroup` Submodule <a name="`dataAwsccMediapackagev2ChannelGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediapackagev2ChannelGroup <a name="DataAwsccMediapackagev2ChannelGroup" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediapackagev2_channel_group awscc_mediapackagev2_channel_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2ChannelGroup } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup(scope: Construct, id: string, config: DataAwsccMediapackagev2ChannelGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig">DataAwsccMediapackagev2ChannelGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig">DataAwsccMediapackagev2ChannelGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediapackagev2ChannelGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.isConstruct"></a>

```typescript
import { dataAwsccMediapackagev2ChannelGroup } from '@cdktn/provider-awscc'

dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.isTerraformElement"></a>

```typescript
import { dataAwsccMediapackagev2ChannelGroup } from '@cdktn/provider-awscc'

dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsccMediapackagev2ChannelGroup } from '@cdktn/provider-awscc'

dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.generateConfigForImport"></a>

```typescript
import { dataAwsccMediapackagev2ChannelGroup } from '@cdktn/provider-awscc'

dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMediapackagev2ChannelGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMediapackagev2ChannelGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMediapackagev2ChannelGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediapackagev2_channel_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediapackagev2ChannelGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.channelGroupName">channelGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.egressDomain">egressDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList">DataAwsccMediapackagev2ChannelGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `egressDomain`<sup>Required</sup> <a name="egressDomain" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.egressDomain"></a>

```typescript
public readonly egressDomain: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.tags"></a>

```typescript
public readonly tags: DataAwsccMediapackagev2ChannelGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList">DataAwsccMediapackagev2ChannelGroupTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediapackagev2ChannelGroupConfig <a name="DataAwsccMediapackagev2ChannelGroupConfig" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2ChannelGroup } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2ChannelGroupConfig: dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediapackagev2_channel_group#id DataAwsccMediapackagev2ChannelGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediapackagev2ChannelGroupTags <a name="DataAwsccMediapackagev2ChannelGroupTags" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTags.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2ChannelGroup } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2ChannelGroupTags: dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediapackagev2ChannelGroupTagsList <a name="DataAwsccMediapackagev2ChannelGroupTagsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2ChannelGroup } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.get"></a>

```typescript
public get(index: number): DataAwsccMediapackagev2ChannelGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediapackagev2ChannelGroupTagsOutputReference <a name="DataAwsccMediapackagev2ChannelGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2ChannelGroup } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTags">DataAwsccMediapackagev2ChannelGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2ChannelGroupTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2ChannelGroup.DataAwsccMediapackagev2ChannelGroupTags">DataAwsccMediapackagev2ChannelGroupTags</a>

---



