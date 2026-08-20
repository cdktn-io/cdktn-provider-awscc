# `dataAwsccSesConfigurationSetEventDestination` Submodule <a name="`dataAwsccSesConfigurationSetEventDestination` Submodule" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSesConfigurationSetEventDestination <a name="DataAwsccSesConfigurationSetEventDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ses_configuration_set_event_destination awscc_ses_configuration_set_event_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer"></a>

```typescript
import { dataAwsccSesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

new dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination(scope: Construct, id: string, config: DataAwsccSesConfigurationSetEventDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig">DataAwsccSesConfigurationSetEventDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig">DataAwsccSesConfigurationSetEventDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSesConfigurationSetEventDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isConstruct"></a>

```typescript
import { dataAwsccSesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformElement"></a>

```typescript
import { dataAwsccSesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformDataSource"></a>

```typescript
import { dataAwsccSesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generateConfigForImport"></a>

```typescript
import { dataAwsccSesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSesConfigurationSetEventDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSesConfigurationSetEventDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSesConfigurationSetEventDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ses_configuration_set_event_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSesConfigurationSetEventDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.configurationSetEventDestinationId">configurationSetEventDestinationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.eventDestination">eventDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `configurationSetEventDestinationId`<sup>Required</sup> <a name="configurationSetEventDestinationId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.configurationSetEventDestinationId"></a>

```typescript
public readonly configurationSetEventDestinationId: string;
```

- *Type:* string

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

---

##### `eventDestination`<sup>Required</sup> <a name="eventDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.eventDestination"></a>

```typescript
public readonly eventDestination: DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSesConfigurationSetEventDestinationConfig <a name="DataAwsccSesConfigurationSetEventDestinationConfig" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.Initializer"></a>

```typescript
import { dataAwsccSesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

const dataAwsccSesConfigurationSetEventDestinationConfig: dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ses_configuration_set_event_destination#id DataAwsccSesConfigurationSetEventDestination#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSesConfigurationSetEventDestinationEventDestination <a name="DataAwsccSesConfigurationSetEventDestinationEventDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestination.Initializer"></a>

```typescript
import { dataAwsccSesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

const dataAwsccSesConfigurationSetEventDestinationEventDestination: dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestination = { ... }
```


### DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination.Initializer"></a>

```typescript
import { dataAwsccSesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

const dataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination: dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination = { ... }
```


### DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.Initializer"></a>

```typescript
import { dataAwsccSesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

const dataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations: dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations = { ... }
```


### DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination.Initializer"></a>

```typescript
import { dataAwsccSesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

const dataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination: dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination = { ... }
```


### DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.Initializer"></a>

```typescript
import { dataAwsccSesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

const dataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination: dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination = { ... }
```


### DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination.Initializer"></a>

```typescript
import { dataAwsccSesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

const dataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination: dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccSesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

new dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

new dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValue">defaultDimensionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionName">dimensionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSource">dimensionValueSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultDimensionValue`<sup>Required</sup> <a name="defaultDimensionValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValue"></a>

```typescript
public readonly defaultDimensionValue: string;
```

- *Type:* string

---

##### `dimensionName`<sup>Required</sup> <a name="dimensionName" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionName"></a>

```typescript
public readonly dimensionName: string;
```

- *Type:* string

---

##### `dimensionValueSource`<sup>Required</sup> <a name="dimensionValueSource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSource"></a>

```typescript
public readonly dimensionValueSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>

---


### DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

new dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurations">dimensionConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensionConfigurations`<sup>Required</sup> <a name="dimensionConfigurations" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurations"></a>

```typescript
public readonly dimensionConfigurations: DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a>

---


### DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

new dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArn">eventBusArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArn"></a>

```typescript
public readonly eventBusArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

---


### DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

new dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn">deliveryStreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryStreamArn`<sup>Required</sup> <a name="deliveryStreamArn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn"></a>

```typescript
public readonly deliveryStreamArn: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

---


### DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

new dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestination">cloudwatchDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestination">eventBridgeDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestination">kinesisFirehoseDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypes">matchingEventTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestination">snsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestination">DataAwsccSesConfigurationSetEventDestinationEventDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchDestination`<sup>Required</sup> <a name="cloudwatchDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestination"></a>

```typescript
public readonly cloudwatchDestination: DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `eventBridgeDestination`<sup>Required</sup> <a name="eventBridgeDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestination"></a>

```typescript
public readonly eventBridgeDestination: DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference</a>

---

##### `kinesisFirehoseDestination`<sup>Required</sup> <a name="kinesisFirehoseDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestination"></a>

```typescript
public readonly kinesisFirehoseDestination: DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference</a>

---

##### `matchingEventTypes`<sup>Required</sup> <a name="matchingEventTypes" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypes"></a>

```typescript
public readonly matchingEventTypes: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `snsDestination`<sup>Required</sup> <a name="snsDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestination"></a>

```typescript
public readonly snsDestination: DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesConfigurationSetEventDestinationEventDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestination">DataAwsccSesConfigurationSetEventDestinationEventDestination</a>

---


### DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesConfigurationSetEventDestination } from '@cdktn/provider-awscc'

new dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination</a>

---



