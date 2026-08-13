# `dataAwsccSmsvoiceConfigurationSet` Submodule <a name="`dataAwsccSmsvoiceConfigurationSet` Submodule" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSmsvoiceConfigurationSet <a name="DataAwsccSmsvoiceConfigurationSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/smsvoice_configuration_set awscc_smsvoice_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceConfigurationSet } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet(scope: Construct, id: string, config: DataAwsccSmsvoiceConfigurationSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig">DataAwsccSmsvoiceConfigurationSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig">DataAwsccSmsvoiceConfigurationSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSmsvoiceConfigurationSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.isConstruct"></a>

```typescript
import { dataAwsccSmsvoiceConfigurationSet } from '@cdktn/provider-awscc'

dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.isTerraformElement"></a>

```typescript
import { dataAwsccSmsvoiceConfigurationSet } from '@cdktn/provider-awscc'

dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.isTerraformDataSource"></a>

```typescript
import { dataAwsccSmsvoiceConfigurationSet } from '@cdktn/provider-awscc'

dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.generateConfigForImport"></a>

```typescript
import { dataAwsccSmsvoiceConfigurationSet } from '@cdktn/provider-awscc'

dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSmsvoiceConfigurationSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSmsvoiceConfigurationSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSmsvoiceConfigurationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/smsvoice_configuration_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSmsvoiceConfigurationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.defaultSenderId">defaultSenderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.eventDestinations">eventDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList">DataAwsccSmsvoiceConfigurationSetEventDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.messageFeedbackEnabled">messageFeedbackEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.protectConfigurationId">protectConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList">DataAwsccSmsvoiceConfigurationSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

---

##### `defaultSenderId`<sup>Required</sup> <a name="defaultSenderId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.defaultSenderId"></a>

```typescript
public readonly defaultSenderId: string;
```

- *Type:* string

---

##### `eventDestinations`<sup>Required</sup> <a name="eventDestinations" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.eventDestinations"></a>

```typescript
public readonly eventDestinations: DataAwsccSmsvoiceConfigurationSetEventDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList">DataAwsccSmsvoiceConfigurationSetEventDestinationsList</a>

---

##### `messageFeedbackEnabled`<sup>Required</sup> <a name="messageFeedbackEnabled" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.messageFeedbackEnabled"></a>

```typescript
public readonly messageFeedbackEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `protectConfigurationId`<sup>Required</sup> <a name="protectConfigurationId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.protectConfigurationId"></a>

```typescript
public readonly protectConfigurationId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.tags"></a>

```typescript
public readonly tags: DataAwsccSmsvoiceConfigurationSetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList">DataAwsccSmsvoiceConfigurationSetTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSmsvoiceConfigurationSetConfig <a name="DataAwsccSmsvoiceConfigurationSetConfig" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceConfigurationSet } from '@cdktn/provider-awscc'

const dataAwsccSmsvoiceConfigurationSetConfig: dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/smsvoice_configuration_set#id DataAwsccSmsvoiceConfigurationSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSmsvoiceConfigurationSetEventDestinations <a name="DataAwsccSmsvoiceConfigurationSetEventDestinations" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinations.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceConfigurationSet } from '@cdktn/provider-awscc'

const dataAwsccSmsvoiceConfigurationSetEventDestinations: dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinations = { ... }
```


### DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination <a name="DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceConfigurationSet } from '@cdktn/provider-awscc'

const dataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination: dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination = { ... }
```


### DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination <a name="DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceConfigurationSet } from '@cdktn/provider-awscc'

const dataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination: dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination = { ... }
```


### DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestination <a name="DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestination" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestination.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceConfigurationSet } from '@cdktn/provider-awscc'

const dataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestination: dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestination = { ... }
```


### DataAwsccSmsvoiceConfigurationSetTags <a name="DataAwsccSmsvoiceConfigurationSetTags" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTags.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceConfigurationSet } from '@cdktn/provider-awscc'

const dataAwsccSmsvoiceConfigurationSetTags: dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference <a name="DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceConfigurationSet } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a>

---


### DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference <a name="DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceConfigurationSet } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn">deliveryStreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryStreamArn`<sup>Required</sup> <a name="deliveryStreamArn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn"></a>

```typescript
public readonly deliveryStreamArn: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a>

---


### DataAwsccSmsvoiceConfigurationSetEventDestinationsList <a name="DataAwsccSmsvoiceConfigurationSetEventDestinationsList" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceConfigurationSet } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.get"></a>

```typescript
public get(index: number): DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference <a name="DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceConfigurationSet } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestination">cloudwatchLogsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference">DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationName">eventDestinationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestination">kinesisFirehoseDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference">DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypes">matchingEventTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestination">snsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference">DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinations">DataAwsccSmsvoiceConfigurationSetEventDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogsDestination`<sup>Required</sup> <a name="cloudwatchLogsDestination" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestination"></a>

```typescript
public readonly cloudwatchLogsDestination: DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference">DataAwsccSmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `eventDestinationName`<sup>Required</sup> <a name="eventDestinationName" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationName"></a>

```typescript
public readonly eventDestinationName: string;
```

- *Type:* string

---

##### `kinesisFirehoseDestination`<sup>Required</sup> <a name="kinesisFirehoseDestination" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestination"></a>

```typescript
public readonly kinesisFirehoseDestination: DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference">DataAwsccSmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference</a>

---

##### `matchingEventTypes`<sup>Required</sup> <a name="matchingEventTypes" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypes"></a>

```typescript
public readonly matchingEventTypes: string[];
```

- *Type:* string[]

---

##### `snsDestination`<sup>Required</sup> <a name="snsDestination" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestination"></a>

```typescript
public readonly snsDestination: DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference">DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSmsvoiceConfigurationSetEventDestinations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinations">DataAwsccSmsvoiceConfigurationSetEventDestinations</a>

---


### DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference <a name="DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceConfigurationSet } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestination">DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestination">DataAwsccSmsvoiceConfigurationSetEventDestinationsSnsDestination</a>

---


### DataAwsccSmsvoiceConfigurationSetTagsList <a name="DataAwsccSmsvoiceConfigurationSetTagsList" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceConfigurationSet } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSmsvoiceConfigurationSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSmsvoiceConfigurationSetTagsOutputReference <a name="DataAwsccSmsvoiceConfigurationSetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSmsvoiceConfigurationSet } from '@cdktn/provider-awscc'

new dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTags">DataAwsccSmsvoiceConfigurationSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSmsvoiceConfigurationSetTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceConfigurationSet.DataAwsccSmsvoiceConfigurationSetTags">DataAwsccSmsvoiceConfigurationSetTags</a>

---



