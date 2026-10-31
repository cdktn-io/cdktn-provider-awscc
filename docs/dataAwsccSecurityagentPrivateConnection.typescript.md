# `dataAwsccSecurityagentPrivateConnection` Submodule <a name="`dataAwsccSecurityagentPrivateConnection` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityagentPrivateConnection <a name="DataAwsccSecurityagentPrivateConnection" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/securityagent_private_connection awscc_securityagent_private_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer"></a>

```typescript
import { dataAwsccSecurityagentPrivateConnection } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection(scope: Construct, id: string, config: DataAwsccSecurityagentPrivateConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig">DataAwsccSecurityagentPrivateConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig">DataAwsccSecurityagentPrivateConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSecurityagentPrivateConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isConstruct"></a>

```typescript
import { dataAwsccSecurityagentPrivateConnection } from '@cdktn/provider-awscc'

dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isTerraformElement"></a>

```typescript
import { dataAwsccSecurityagentPrivateConnection } from '@cdktn/provider-awscc'

dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isTerraformDataSource"></a>

```typescript
import { dataAwsccSecurityagentPrivateConnection } from '@cdktn/provider-awscc'

dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.generateConfigForImport"></a>

```typescript
import { dataAwsccSecurityagentPrivateConnection } from '@cdktn/provider-awscc'

dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSecurityagentPrivateConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSecurityagentPrivateConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSecurityagentPrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/securityagent_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityagentPrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.certificateExpiryTime">certificateExpiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.dnsResolution">dnsResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.hostAddress">hostAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.mode">mode</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference">DataAwsccSecurityagentPrivateConnectionModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.privateConnectionName">privateConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.resourceConfigurationId">resourceConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.resourceGatewayId">resourceGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList">DataAwsccSecurityagentPrivateConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `certificateExpiryTime`<sup>Required</sup> <a name="certificateExpiryTime" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.certificateExpiryTime"></a>

```typescript
public readonly certificateExpiryTime: string;
```

- *Type:* string

---

##### `dnsResolution`<sup>Required</sup> <a name="dnsResolution" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.dnsResolution"></a>

```typescript
public readonly dnsResolution: string;
```

- *Type:* string

---

##### `hostAddress`<sup>Required</sup> <a name="hostAddress" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.hostAddress"></a>

```typescript
public readonly hostAddress: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.mode"></a>

```typescript
public readonly mode: DataAwsccSecurityagentPrivateConnectionModeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference">DataAwsccSecurityagentPrivateConnectionModeOutputReference</a>

---

##### `privateConnectionName`<sup>Required</sup> <a name="privateConnectionName" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.privateConnectionName"></a>

```typescript
public readonly privateConnectionName: string;
```

- *Type:* string

---

##### `resourceConfigurationId`<sup>Required</sup> <a name="resourceConfigurationId" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.resourceConfigurationId"></a>

```typescript
public readonly resourceConfigurationId: string;
```

- *Type:* string

---

##### `resourceGatewayId`<sup>Required</sup> <a name="resourceGatewayId" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.resourceGatewayId"></a>

```typescript
public readonly resourceGatewayId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.tags"></a>

```typescript
public readonly tags: DataAwsccSecurityagentPrivateConnectionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList">DataAwsccSecurityagentPrivateConnectionTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityagentPrivateConnectionConfig <a name="DataAwsccSecurityagentPrivateConnectionConfig" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.Initializer"></a>

```typescript
import { dataAwsccSecurityagentPrivateConnection } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentPrivateConnectionConfig: dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/securityagent_private_connection#id DataAwsccSecurityagentPrivateConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityagentPrivateConnectionMode <a name="DataAwsccSecurityagentPrivateConnectionMode" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionMode.Initializer"></a>

```typescript
import { dataAwsccSecurityagentPrivateConnection } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentPrivateConnectionMode: dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionMode = { ... }
```


### DataAwsccSecurityagentPrivateConnectionModeSelfManaged <a name="DataAwsccSecurityagentPrivateConnectionModeSelfManaged" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManaged.Initializer"></a>

```typescript
import { dataAwsccSecurityagentPrivateConnection } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentPrivateConnectionModeSelfManaged: dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManaged = { ... }
```


### DataAwsccSecurityagentPrivateConnectionModeServiceManaged <a name="DataAwsccSecurityagentPrivateConnectionModeServiceManaged" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManaged.Initializer"></a>

```typescript
import { dataAwsccSecurityagentPrivateConnection } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentPrivateConnectionModeServiceManaged: dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManaged = { ... }
```


### DataAwsccSecurityagentPrivateConnectionTags <a name="DataAwsccSecurityagentPrivateConnectionTags" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTags.Initializer"></a>

```typescript
import { dataAwsccSecurityagentPrivateConnection } from '@cdktn/provider-awscc'

const dataAwsccSecurityagentPrivateConnectionTags: dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityagentPrivateConnectionModeOutputReference <a name="DataAwsccSecurityagentPrivateConnectionModeOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentPrivateConnection } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference">DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.serviceManaged">serviceManaged</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference">DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionMode">DataAwsccSecurityagentPrivateConnectionMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `selfManaged`<sup>Required</sup> <a name="selfManaged" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.selfManaged"></a>

```typescript
public readonly selfManaged: DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference">DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference</a>

---

##### `serviceManaged`<sup>Required</sup> <a name="serviceManaged" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.serviceManaged"></a>

```typescript
public readonly serviceManaged: DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference">DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentPrivateConnectionMode;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionMode">DataAwsccSecurityagentPrivateConnectionMode</a>

---


### DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference <a name="DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentPrivateConnection } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationId">resourceConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManaged">DataAwsccSecurityagentPrivateConnectionModeSelfManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceConfigurationId`<sup>Required</sup> <a name="resourceConfigurationId" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationId"></a>

```typescript
public readonly resourceConfigurationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentPrivateConnectionModeSelfManaged;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeSelfManaged">DataAwsccSecurityagentPrivateConnectionModeSelfManaged</a>

---


### DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference <a name="DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentPrivateConnection } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolution">dnsResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddress">hostAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEni">ipv4AddressesPerEni</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRanges">portRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManaged">DataAwsccSecurityagentPrivateConnectionModeServiceManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsResolution`<sup>Required</sup> <a name="dnsResolution" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolution"></a>

```typescript
public readonly dnsResolution: string;
```

- *Type:* string

---

##### `hostAddress`<sup>Required</sup> <a name="hostAddress" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddress"></a>

```typescript
public readonly hostAddress: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `ipv4AddressesPerEni`<sup>Required</sup> <a name="ipv4AddressesPerEni" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEni"></a>

```typescript
public readonly ipv4AddressesPerEni: number;
```

- *Type:* number

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRanges"></a>

```typescript
public readonly portRanges: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentPrivateConnectionModeServiceManaged;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionModeServiceManaged">DataAwsccSecurityagentPrivateConnectionModeServiceManaged</a>

---


### DataAwsccSecurityagentPrivateConnectionTagsList <a name="DataAwsccSecurityagentPrivateConnectionTagsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.Initializer"></a>

```typescript
import { dataAwsccSecurityagentPrivateConnection } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSecurityagentPrivateConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSecurityagentPrivateConnectionTagsOutputReference <a name="DataAwsccSecurityagentPrivateConnectionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityagentPrivateConnection } from '@cdktn/provider-awscc'

new dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTags">DataAwsccSecurityagentPrivateConnectionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityagentPrivateConnectionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentPrivateConnection.DataAwsccSecurityagentPrivateConnectionTags">DataAwsccSecurityagentPrivateConnectionTags</a>

---



