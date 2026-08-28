# `dataAwsccIotwirelessServiceProfile` Submodule <a name="`dataAwsccIotwirelessServiceProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotwirelessServiceProfile <a name="DataAwsccIotwirelessServiceProfile" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotwireless_service_profile awscc_iotwireless_service_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer"></a>

```typescript
import { dataAwsccIotwirelessServiceProfile } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile(scope: Construct, id: string, config: DataAwsccIotwirelessServiceProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig">DataAwsccIotwirelessServiceProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig">DataAwsccIotwirelessServiceProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotwirelessServiceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isConstruct"></a>

```typescript
import { dataAwsccIotwirelessServiceProfile } from '@cdktn/provider-awscc'

dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformElement"></a>

```typescript
import { dataAwsccIotwirelessServiceProfile } from '@cdktn/provider-awscc'

dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformDataSource"></a>

```typescript
import { dataAwsccIotwirelessServiceProfile } from '@cdktn/provider-awscc'

dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generateConfigForImport"></a>

```typescript
import { dataAwsccIotwirelessServiceProfile } from '@cdktn/provider-awscc'

dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIotwirelessServiceProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotwirelessServiceProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotwirelessServiceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotwireless_service_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotwirelessServiceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference">DataAwsccIotwirelessServiceProfileLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.serviceProfileId">serviceProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList">DataAwsccIotwirelessServiceProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.loRaWan"></a>

```typescript
public readonly loRaWan: DataAwsccIotwirelessServiceProfileLoRaWanOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference">DataAwsccIotwirelessServiceProfileLoRaWanOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceProfileId`<sup>Required</sup> <a name="serviceProfileId" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.serviceProfileId"></a>

```typescript
public readonly serviceProfileId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.tags"></a>

```typescript
public readonly tags: DataAwsccIotwirelessServiceProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList">DataAwsccIotwirelessServiceProfileTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotwirelessServiceProfileConfig <a name="DataAwsccIotwirelessServiceProfileConfig" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.Initializer"></a>

```typescript
import { dataAwsccIotwirelessServiceProfile } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessServiceProfileConfig: dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotwireless_service_profile#id DataAwsccIotwirelessServiceProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotwirelessServiceProfileLoRaWan <a name="DataAwsccIotwirelessServiceProfileLoRaWan" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWan.Initializer"></a>

```typescript
import { dataAwsccIotwirelessServiceProfile } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessServiceProfileLoRaWan: dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWan = { ... }
```


### DataAwsccIotwirelessServiceProfileTags <a name="DataAwsccIotwirelessServiceProfileTags" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTags.Initializer"></a>

```typescript
import { dataAwsccIotwirelessServiceProfile } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessServiceProfileTags: dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotwirelessServiceProfileLoRaWanOutputReference <a name="DataAwsccIotwirelessServiceProfileLoRaWanOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessServiceProfile } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.addGwMetadata">addGwMetadata</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.channelMask">channelMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.devStatusReqFreq">devStatusReqFreq</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.dlBucketSize">dlBucketSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.dlRate">dlRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.dlRatePolicy">dlRatePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.drMax">drMax</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.drMin">drMin</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.hrAllowed">hrAllowed</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.minGwDiversity">minGwDiversity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.nwkGeoLoc">nwkGeoLoc</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.prAllowed">prAllowed</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.raAllowed">raAllowed</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusBattery">reportDevStatusBattery</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusMargin">reportDevStatusMargin</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.targetPer">targetPer</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.ulBucketSize">ulBucketSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.ulRate">ulRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.ulRatePolicy">ulRatePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWan">DataAwsccIotwirelessServiceProfileLoRaWan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addGwMetadata`<sup>Required</sup> <a name="addGwMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.addGwMetadata"></a>

```typescript
public readonly addGwMetadata: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `channelMask`<sup>Required</sup> <a name="channelMask" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.channelMask"></a>

```typescript
public readonly channelMask: string;
```

- *Type:* string

---

##### `devStatusReqFreq`<sup>Required</sup> <a name="devStatusReqFreq" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.devStatusReqFreq"></a>

```typescript
public readonly devStatusReqFreq: number;
```

- *Type:* number

---

##### `dlBucketSize`<sup>Required</sup> <a name="dlBucketSize" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.dlBucketSize"></a>

```typescript
public readonly dlBucketSize: number;
```

- *Type:* number

---

##### `dlRate`<sup>Required</sup> <a name="dlRate" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.dlRate"></a>

```typescript
public readonly dlRate: number;
```

- *Type:* number

---

##### `dlRatePolicy`<sup>Required</sup> <a name="dlRatePolicy" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.dlRatePolicy"></a>

```typescript
public readonly dlRatePolicy: string;
```

- *Type:* string

---

##### `drMax`<sup>Required</sup> <a name="drMax" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.drMax"></a>

```typescript
public readonly drMax: number;
```

- *Type:* number

---

##### `drMin`<sup>Required</sup> <a name="drMin" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.drMin"></a>

```typescript
public readonly drMin: number;
```

- *Type:* number

---

##### `hrAllowed`<sup>Required</sup> <a name="hrAllowed" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.hrAllowed"></a>

```typescript
public readonly hrAllowed: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `minGwDiversity`<sup>Required</sup> <a name="minGwDiversity" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.minGwDiversity"></a>

```typescript
public readonly minGwDiversity: number;
```

- *Type:* number

---

##### `nwkGeoLoc`<sup>Required</sup> <a name="nwkGeoLoc" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.nwkGeoLoc"></a>

```typescript
public readonly nwkGeoLoc: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `prAllowed`<sup>Required</sup> <a name="prAllowed" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.prAllowed"></a>

```typescript
public readonly prAllowed: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `raAllowed`<sup>Required</sup> <a name="raAllowed" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.raAllowed"></a>

```typescript
public readonly raAllowed: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `reportDevStatusBattery`<sup>Required</sup> <a name="reportDevStatusBattery" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusBattery"></a>

```typescript
public readonly reportDevStatusBattery: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `reportDevStatusMargin`<sup>Required</sup> <a name="reportDevStatusMargin" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusMargin"></a>

```typescript
public readonly reportDevStatusMargin: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `targetPer`<sup>Required</sup> <a name="targetPer" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.targetPer"></a>

```typescript
public readonly targetPer: number;
```

- *Type:* number

---

##### `ulBucketSize`<sup>Required</sup> <a name="ulBucketSize" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.ulBucketSize"></a>

```typescript
public readonly ulBucketSize: number;
```

- *Type:* number

---

##### `ulRate`<sup>Required</sup> <a name="ulRate" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.ulRate"></a>

```typescript
public readonly ulRate: number;
```

- *Type:* number

---

##### `ulRatePolicy`<sup>Required</sup> <a name="ulRatePolicy" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.ulRatePolicy"></a>

```typescript
public readonly ulRatePolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessServiceProfileLoRaWan;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWan">DataAwsccIotwirelessServiceProfileLoRaWan</a>

---


### DataAwsccIotwirelessServiceProfileTagsList <a name="DataAwsccIotwirelessServiceProfileTagsList" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer"></a>

```typescript
import { dataAwsccIotwirelessServiceProfile } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.get"></a>

```typescript
public get(index: number): DataAwsccIotwirelessServiceProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotwirelessServiceProfileTagsOutputReference <a name="DataAwsccIotwirelessServiceProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessServiceProfile } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTags">DataAwsccIotwirelessServiceProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessServiceProfileTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTags">DataAwsccIotwirelessServiceProfileTags</a>

---



