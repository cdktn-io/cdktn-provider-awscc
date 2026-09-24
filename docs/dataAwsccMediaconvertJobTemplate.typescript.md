# `dataAwsccMediaconvertJobTemplate` Submodule <a name="`dataAwsccMediaconvertJobTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconvertJobTemplate <a name="DataAwsccMediaconvertJobTemplate" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/mediaconvert_job_template awscc_mediaconvert_job_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.Initializer"></a>

```typescript
import { dataAwsccMediaconvertJobTemplate } from '@cdktn/provider-awscc'

new dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate(scope: Construct, id: string, config: DataAwsccMediaconvertJobTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig">DataAwsccMediaconvertJobTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig">DataAwsccMediaconvertJobTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediaconvertJobTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.isConstruct"></a>

```typescript
import { dataAwsccMediaconvertJobTemplate } from '@cdktn/provider-awscc'

dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.isTerraformElement"></a>

```typescript
import { dataAwsccMediaconvertJobTemplate } from '@cdktn/provider-awscc'

dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.isTerraformDataSource"></a>

```typescript
import { dataAwsccMediaconvertJobTemplate } from '@cdktn/provider-awscc'

dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.generateConfigForImport"></a>

```typescript
import { dataAwsccMediaconvertJobTemplate } from '@cdktn/provider-awscc'

dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMediaconvertJobTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMediaconvertJobTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMediaconvertJobTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/mediaconvert_job_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconvertJobTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.accelerationSettings">accelerationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference">DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.hopDestinations">hopDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList">DataAwsccMediaconvertJobTemplateHopDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.queue">queue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.settingsJson">settingsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.statusUpdateInterval">statusUpdateInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.tags">tags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accelerationSettings`<sup>Required</sup> <a name="accelerationSettings" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.accelerationSettings"></a>

```typescript
public readonly accelerationSettings: DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference">DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hopDestinations`<sup>Required</sup> <a name="hopDestinations" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.hopDestinations"></a>

```typescript
public readonly hopDestinations: DataAwsccMediaconvertJobTemplateHopDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList">DataAwsccMediaconvertJobTemplateHopDestinationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.queue"></a>

```typescript
public readonly queue: string;
```

- *Type:* string

---

##### `settingsJson`<sup>Required</sup> <a name="settingsJson" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.settingsJson"></a>

```typescript
public readonly settingsJson: string;
```

- *Type:* string

---

##### `statusUpdateInterval`<sup>Required</sup> <a name="statusUpdateInterval" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.statusUpdateInterval"></a>

```typescript
public readonly statusUpdateInterval: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconvertJobTemplateAccelerationSettings <a name="DataAwsccMediaconvertJobTemplateAccelerationSettings" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettings.Initializer"></a>

```typescript
import { dataAwsccMediaconvertJobTemplate } from '@cdktn/provider-awscc'

const dataAwsccMediaconvertJobTemplateAccelerationSettings: dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettings = { ... }
```


### DataAwsccMediaconvertJobTemplateConfig <a name="DataAwsccMediaconvertJobTemplateConfig" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig.Initializer"></a>

```typescript
import { dataAwsccMediaconvertJobTemplate } from '@cdktn/provider-awscc'

const dataAwsccMediaconvertJobTemplateConfig: dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/mediaconvert_job_template#id DataAwsccMediaconvertJobTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconvertJobTemplateHopDestinations <a name="DataAwsccMediaconvertJobTemplateHopDestinations" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinations.Initializer"></a>

```typescript
import { dataAwsccMediaconvertJobTemplate } from '@cdktn/provider-awscc'

const dataAwsccMediaconvertJobTemplateHopDestinations: dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference <a name="DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconvertJobTemplate } from '@cdktn/provider-awscc'

new dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettings">DataAwsccMediaconvertJobTemplateAccelerationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconvertJobTemplateAccelerationSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateAccelerationSettings">DataAwsccMediaconvertJobTemplateAccelerationSettings</a>

---


### DataAwsccMediaconvertJobTemplateHopDestinationsList <a name="DataAwsccMediaconvertJobTemplateHopDestinationsList" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.Initializer"></a>

```typescript
import { dataAwsccMediaconvertJobTemplate } from '@cdktn/provider-awscc'

new dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.get"></a>

```typescript
public get(index: number): DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference <a name="DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediaconvertJobTemplate } from '@cdktn/provider-awscc'

new dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.property.queue">queue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutes">waitMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinations">DataAwsccMediaconvertJobTemplateHopDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.property.queue"></a>

```typescript
public readonly queue: string;
```

- *Type:* string

---

##### `waitMinutes`<sup>Required</sup> <a name="waitMinutes" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutes"></a>

```typescript
public readonly waitMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediaconvertJobTemplateHopDestinations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconvertJobTemplate.DataAwsccMediaconvertJobTemplateHopDestinations">DataAwsccMediaconvertJobTemplateHopDestinations</a>

---



