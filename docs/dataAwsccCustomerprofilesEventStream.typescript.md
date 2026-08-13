# `dataAwsccCustomerprofilesEventStream` Submodule <a name="`dataAwsccCustomerprofilesEventStream` Submodule" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCustomerprofilesEventStream <a name="DataAwsccCustomerprofilesEventStream" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/customerprofiles_event_stream awscc_customerprofiles_event_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesEventStream } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream(scope: Construct, id: string, config: DataAwsccCustomerprofilesEventStreamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig">DataAwsccCustomerprofilesEventStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig">DataAwsccCustomerprofilesEventStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCustomerprofilesEventStream resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isConstruct"></a>

```typescript
import { dataAwsccCustomerprofilesEventStream } from '@cdktn/provider-awscc'

dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isTerraformElement"></a>

```typescript
import { dataAwsccCustomerprofilesEventStream } from '@cdktn/provider-awscc'

dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isTerraformDataSource"></a>

```typescript
import { dataAwsccCustomerprofilesEventStream } from '@cdktn/provider-awscc'

dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.generateConfigForImport"></a>

```typescript
import { dataAwsccCustomerprofilesEventStream } from '@cdktn/provider-awscc'

dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCustomerprofilesEventStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCustomerprofilesEventStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCustomerprofilesEventStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/customerprofiles_event_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCustomerprofilesEventStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.destinationDetails">destinationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference">DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.eventStreamArn">eventStreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.eventStreamName">eventStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList">DataAwsccCustomerprofilesEventStreamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `destinationDetails`<sup>Required</sup> <a name="destinationDetails" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.destinationDetails"></a>

```typescript
public readonly destinationDetails: DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference">DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference</a>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `eventStreamArn`<sup>Required</sup> <a name="eventStreamArn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.eventStreamArn"></a>

```typescript
public readonly eventStreamArn: string;
```

- *Type:* string

---

##### `eventStreamName`<sup>Required</sup> <a name="eventStreamName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.eventStreamName"></a>

```typescript
public readonly eventStreamName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.tags"></a>

```typescript
public readonly tags: DataAwsccCustomerprofilesEventStreamTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList">DataAwsccCustomerprofilesEventStreamTagsList</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStream.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCustomerprofilesEventStreamConfig <a name="DataAwsccCustomerprofilesEventStreamConfig" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesEventStream } from '@cdktn/provider-awscc'

const dataAwsccCustomerprofilesEventStreamConfig: dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/customerprofiles_event_stream#id DataAwsccCustomerprofilesEventStream#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCustomerprofilesEventStreamDestinationDetails <a name="DataAwsccCustomerprofilesEventStreamDestinationDetails" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetails.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesEventStream } from '@cdktn/provider-awscc'

const dataAwsccCustomerprofilesEventStreamDestinationDetails: dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetails = { ... }
```


### DataAwsccCustomerprofilesEventStreamTags <a name="DataAwsccCustomerprofilesEventStreamTags" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTags.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesEventStream } from '@cdktn/provider-awscc'

const dataAwsccCustomerprofilesEventStreamTags: dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference <a name="DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesEventStream } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetails">DataAwsccCustomerprofilesEventStreamDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCustomerprofilesEventStreamDestinationDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamDestinationDetails">DataAwsccCustomerprofilesEventStreamDestinationDetails</a>

---


### DataAwsccCustomerprofilesEventStreamTagsList <a name="DataAwsccCustomerprofilesEventStreamTagsList" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesEventStream } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.get"></a>

```typescript
public get(index: number): DataAwsccCustomerprofilesEventStreamTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCustomerprofilesEventStreamTagsOutputReference <a name="DataAwsccCustomerprofilesEventStreamTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCustomerprofilesEventStream } from '@cdktn/provider-awscc'

new dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTags">DataAwsccCustomerprofilesEventStreamTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCustomerprofilesEventStreamTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCustomerprofilesEventStream.DataAwsccCustomerprofilesEventStreamTags">DataAwsccCustomerprofilesEventStreamTags</a>

---



