# `wisdomQuickResponse` Submodule <a name="`wisdomQuickResponse` Submodule" id="@cdktn/provider-awscc.wisdomQuickResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomQuickResponse <a name="WisdomQuickResponse" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response awscc_wisdom_quick_response}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_quick_response.WisdomQuickResponse;

WisdomQuickResponse.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .content(WisdomQuickResponseContent)
    .knowledgeBaseArn(java.lang.String)
    .name(java.lang.String)
//  .channels(java.util.List<java.lang.String>)
//  .contentType(java.lang.String)
//  .description(java.lang.String)
//  .groupingConfiguration(WisdomQuickResponseGroupingConfiguration)
//  .isActive(java.lang.Boolean|IResolvable)
//  .language(java.lang.String)
//  .shortcutKey(java.lang.String)
//  .tags(IResolvable|java.util.List<WisdomQuickResponseTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a></code> | The container of quick response content. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the knowledge base. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the quick response. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.channels">channels</a></code> | <code>java.util.List<java.lang.String></code> | The Amazon Connect contact channels this quick response applies to. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.contentType">contentType</a></code> | <code>java.lang.String</code> | The media type of the quick response content. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the quick response. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.groupingConfiguration">groupingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a></code> | The configuration information of the user groups that the quick response is accessible to. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.isActive">isActive</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the quick response is active. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.language">language</a></code> | <code>java.lang.String</code> | The language code value for the language in which the quick response is written. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.shortcutKey">shortcutKey</a></code> | <code>java.lang.String</code> | The shortcut key of the quick response. The value should be unique across the knowledge base. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.content"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a>

The container of quick response content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#content WisdomQuickResponse#content}

---

##### `knowledgeBaseArn`<sup>Required</sup> <a name="knowledgeBaseArn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.knowledgeBaseArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#knowledge_base_arn WisdomQuickResponse#knowledge_base_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the quick response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#name WisdomQuickResponse#name}

---

##### `channels`<sup>Optional</sup> <a name="channels" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.channels"></a>

- *Type:* java.util.List<java.lang.String>

The Amazon Connect contact channels this quick response applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#channels WisdomQuickResponse#channels}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.contentType"></a>

- *Type:* java.lang.String

The media type of the quick response content.

* Use application/x.quickresponse;format=plain for quick response written in plain text.
* Use application/x.quickresponse;format=markdown for quick response written in richtext.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#content_type WisdomQuickResponse#content_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the quick response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#description WisdomQuickResponse#description}

---

##### `groupingConfiguration`<sup>Optional</sup> <a name="groupingConfiguration" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.groupingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a>

The configuration information of the user groups that the quick response is accessible to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#grouping_configuration WisdomQuickResponse#grouping_configuration}

---

##### `isActive`<sup>Optional</sup> <a name="isActive" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.isActive"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the quick response is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#is_active WisdomQuickResponse#is_active}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.language"></a>

- *Type:* java.lang.String

The language code value for the language in which the quick response is written.

The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#language WisdomQuickResponse#language}

---

##### `shortcutKey`<sup>Optional</sup> <a name="shortcutKey" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.shortcutKey"></a>

- *Type:* java.lang.String

The shortcut key of the quick response. The value should be unique across the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#shortcut_key WisdomQuickResponse#shortcut_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#tags WisdomQuickResponse#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putGroupingConfiguration">putGroupingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetChannels">resetChannels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetGroupingConfiguration">resetGroupingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetIsActive">resetIsActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetShortcutKey">resetShortcutKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContent` <a name="putContent" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putContent"></a>

```java
public void putContent(WisdomQuickResponseContent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a>

---

##### `putGroupingConfiguration` <a name="putGroupingConfiguration" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putGroupingConfiguration"></a>

```java
public void putGroupingConfiguration(WisdomQuickResponseGroupingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putGroupingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<WisdomQuickResponseTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>>

---

##### `resetChannels` <a name="resetChannels" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetChannels"></a>

```java
public void resetChannels()
```

##### `resetContentType` <a name="resetContentType" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGroupingConfiguration` <a name="resetGroupingConfiguration" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetGroupingConfiguration"></a>

```java
public void resetGroupingConfiguration()
```

##### `resetIsActive` <a name="resetIsActive" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetIsActive"></a>

```java
public void resetIsActive()
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetLanguage"></a>

```java
public void resetLanguage()
```

##### `resetShortcutKey` <a name="resetShortcutKey" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetShortcutKey"></a>

```java
public void resetShortcutKey()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WisdomQuickResponse resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isConstruct"></a>

```java
import io.cdktn.providers.awscc.wisdom_quick_response.WisdomQuickResponse;

WisdomQuickResponse.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.wisdom_quick_response.WisdomQuickResponse;

WisdomQuickResponse.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.wisdom_quick_response.WisdomQuickResponse;

WisdomQuickResponse.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.wisdom_quick_response.WisdomQuickResponse;

WisdomQuickResponse.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WisdomQuickResponse.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WisdomQuickResponse resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WisdomQuickResponse to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WisdomQuickResponse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WisdomQuickResponse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference">WisdomQuickResponseContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contents">contents</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference">WisdomQuickResponseContentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.groupingConfiguration">groupingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference">WisdomQuickResponseGroupingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.quickResponseArn">quickResponseArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.quickResponseId">quickResponseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList">WisdomQuickResponseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.channelsInput">channelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contentInput">contentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.groupingConfigurationInput">groupingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.isActiveInput">isActiveInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.knowledgeBaseArnInput">knowledgeBaseArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.languageInput">languageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.shortcutKeyInput">shortcutKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.channels">channels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.isActive">isActive</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.shortcutKey">shortcutKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.content"></a>

```java
public WisdomQuickResponseContentOutputReference getContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference">WisdomQuickResponseContentOutputReference</a>

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contents"></a>

```java
public WisdomQuickResponseContentsOutputReference getContents();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference">WisdomQuickResponseContentsOutputReference</a>

---

##### `groupingConfiguration`<sup>Required</sup> <a name="groupingConfiguration" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.groupingConfiguration"></a>

```java
public WisdomQuickResponseGroupingConfigurationOutputReference getGroupingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference">WisdomQuickResponseGroupingConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `quickResponseArn`<sup>Required</sup> <a name="quickResponseArn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.quickResponseArn"></a>

```java
public java.lang.String getQuickResponseArn();
```

- *Type:* java.lang.String

---

##### `quickResponseId`<sup>Required</sup> <a name="quickResponseId" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.quickResponseId"></a>

```java
public java.lang.String getQuickResponseId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.tags"></a>

```java
public WisdomQuickResponseTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList">WisdomQuickResponseTagsList</a>

---

##### `channelsInput`<sup>Optional</sup> <a name="channelsInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.channelsInput"></a>

```java
public java.util.List<java.lang.String> getChannelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contentInput"></a>

```java
public IResolvable|WisdomQuickResponseContent getContentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a>

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `groupingConfigurationInput`<sup>Optional</sup> <a name="groupingConfigurationInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.groupingConfigurationInput"></a>

```java
public IResolvable|WisdomQuickResponseGroupingConfiguration getGroupingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a>

---

##### `isActiveInput`<sup>Optional</sup> <a name="isActiveInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.isActiveInput"></a>

```java
public java.lang.Boolean|IResolvable getIsActiveInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `knowledgeBaseArnInput`<sup>Optional</sup> <a name="knowledgeBaseArnInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.knowledgeBaseArnInput"></a>

```java
public java.lang.String getKnowledgeBaseArnInput();
```

- *Type:* java.lang.String

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.languageInput"></a>

```java
public java.lang.String getLanguageInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `shortcutKeyInput`<sup>Optional</sup> <a name="shortcutKeyInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.shortcutKeyInput"></a>

```java
public java.lang.String getShortcutKeyInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.tagsInput"></a>

```java
public IResolvable|java.util.List<WisdomQuickResponseTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>>

---

##### `channels`<sup>Required</sup> <a name="channels" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.channels"></a>

```java
public java.util.List<java.lang.String> getChannels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.isActive"></a>

```java
public java.lang.Boolean|IResolvable getIsActive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `knowledgeBaseArn`<sup>Required</sup> <a name="knowledgeBaseArn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.knowledgeBaseArn"></a>

```java
public java.lang.String getKnowledgeBaseArn();
```

- *Type:* java.lang.String

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `shortcutKey`<sup>Required</sup> <a name="shortcutKey" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.shortcutKey"></a>

```java
public java.lang.String getShortcutKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponse.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomQuickResponseConfig <a name="WisdomQuickResponseConfig" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_quick_response.WisdomQuickResponseConfig;

WisdomQuickResponseConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .content(WisdomQuickResponseContent)
    .knowledgeBaseArn(java.lang.String)
    .name(java.lang.String)
//  .channels(java.util.List<java.lang.String>)
//  .contentType(java.lang.String)
//  .description(java.lang.String)
//  .groupingConfiguration(WisdomQuickResponseGroupingConfiguration)
//  .isActive(java.lang.Boolean|IResolvable)
//  .language(java.lang.String)
//  .shortcutKey(java.lang.String)
//  .tags(IResolvable|java.util.List<WisdomQuickResponseTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a></code> | The container of quick response content. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the knowledge base. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the quick response. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.channels">channels</a></code> | <code>java.util.List<java.lang.String></code> | The Amazon Connect contact channels this quick response applies to. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.contentType">contentType</a></code> | <code>java.lang.String</code> | The media type of the quick response content. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the quick response. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.groupingConfiguration">groupingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a></code> | The configuration information of the user groups that the quick response is accessible to. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.isActive">isActive</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the quick response is active. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.language">language</a></code> | <code>java.lang.String</code> | The language code value for the language in which the quick response is written. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.shortcutKey">shortcutKey</a></code> | <code>java.lang.String</code> | The shortcut key of the quick response. The value should be unique across the knowledge base. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.content"></a>

```java
public WisdomQuickResponseContent getContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a>

The container of quick response content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#content WisdomQuickResponse#content}

---

##### `knowledgeBaseArn`<sup>Required</sup> <a name="knowledgeBaseArn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.knowledgeBaseArn"></a>

```java
public java.lang.String getKnowledgeBaseArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#knowledge_base_arn WisdomQuickResponse#knowledge_base_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the quick response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#name WisdomQuickResponse#name}

---

##### `channels`<sup>Optional</sup> <a name="channels" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.channels"></a>

```java
public java.util.List<java.lang.String> getChannels();
```

- *Type:* java.util.List<java.lang.String>

The Amazon Connect contact channels this quick response applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#channels WisdomQuickResponse#channels}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

The media type of the quick response content.

* Use application/x.quickresponse;format=plain for quick response written in plain text.
* Use application/x.quickresponse;format=markdown for quick response written in richtext.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#content_type WisdomQuickResponse#content_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the quick response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#description WisdomQuickResponse#description}

---

##### `groupingConfiguration`<sup>Optional</sup> <a name="groupingConfiguration" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.groupingConfiguration"></a>

```java
public WisdomQuickResponseGroupingConfiguration getGroupingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a>

The configuration information of the user groups that the quick response is accessible to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#grouping_configuration WisdomQuickResponse#grouping_configuration}

---

##### `isActive`<sup>Optional</sup> <a name="isActive" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.isActive"></a>

```java
public java.lang.Boolean|IResolvable getIsActive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the quick response is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#is_active WisdomQuickResponse#is_active}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

The language code value for the language in which the quick response is written.

The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#language WisdomQuickResponse#language}

---

##### `shortcutKey`<sup>Optional</sup> <a name="shortcutKey" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.shortcutKey"></a>

```java
public java.lang.String getShortcutKey();
```

- *Type:* java.lang.String

The shortcut key of the quick response. The value should be unique across the knowledge base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#shortcut_key WisdomQuickResponse#shortcut_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseConfig.property.tags"></a>

```java
public IResolvable|java.util.List<WisdomQuickResponseTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#tags WisdomQuickResponse#tags}

---

### WisdomQuickResponseContent <a name="WisdomQuickResponseContent" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_quick_response.WisdomQuickResponseContent;

WisdomQuickResponseContent.builder()
//  .content(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent.property.content">content</a></code> | <code>java.lang.String</code> | The content of the quick response. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The content of the quick response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#content WisdomQuickResponse#content}

---

### WisdomQuickResponseContents <a name="WisdomQuickResponseContents" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContents.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_quick_response.WisdomQuickResponseContents;

WisdomQuickResponseContents.builder()
    .build();
```


### WisdomQuickResponseContentsMarkdown <a name="WisdomQuickResponseContentsMarkdown" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdown"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdown.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_quick_response.WisdomQuickResponseContentsMarkdown;

WisdomQuickResponseContentsMarkdown.builder()
    .build();
```


### WisdomQuickResponseContentsPlainText <a name="WisdomQuickResponseContentsPlainText" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainText.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_quick_response.WisdomQuickResponseContentsPlainText;

WisdomQuickResponseContentsPlainText.builder()
    .build();
```


### WisdomQuickResponseGroupingConfiguration <a name="WisdomQuickResponseGroupingConfiguration" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_quick_response.WisdomQuickResponseGroupingConfiguration;

WisdomQuickResponseGroupingConfiguration.builder()
//  .criteria(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration.property.criteria">criteria</a></code> | <code>java.lang.String</code> | The criteria used for grouping Amazon Q in Connect users. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The list of values that define different groups of Amazon Q in Connect users. |

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration.property.criteria"></a>

```java
public java.lang.String getCriteria();
```

- *Type:* java.lang.String

The criteria used for grouping Amazon Q in Connect users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#criteria WisdomQuickResponse#criteria}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The list of values that define different groups of Amazon Q in Connect users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#values WisdomQuickResponse#values}

---

### WisdomQuickResponseTags <a name="WisdomQuickResponseTags" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_quick_response.WisdomQuickResponseTags;

WisdomQuickResponseTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#key WisdomQuickResponse#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_quick_response#value WisdomQuickResponse#value}

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomQuickResponseContentOutputReference <a name="WisdomQuickResponseContentOutputReference" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_quick_response.WisdomQuickResponseContentOutputReference;

new WisdomQuickResponseContentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.resetContent">resetContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.resetContent"></a>

```java
public void resetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomQuickResponseContent getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContent">WisdomQuickResponseContent</a>

---


### WisdomQuickResponseContentsMarkdownOutputReference <a name="WisdomQuickResponseContentsMarkdownOutputReference" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_quick_response.WisdomQuickResponseContentsMarkdownOutputReference;

new WisdomQuickResponseContentsMarkdownOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdown">WisdomQuickResponseContentsMarkdown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference.property.internalValue"></a>

```java
public WisdomQuickResponseContentsMarkdown getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdown">WisdomQuickResponseContentsMarkdown</a>

---


### WisdomQuickResponseContentsOutputReference <a name="WisdomQuickResponseContentsOutputReference" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_quick_response.WisdomQuickResponseContentsOutputReference;

new WisdomQuickResponseContentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.markdown">markdown</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference">WisdomQuickResponseContentsMarkdownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.plainText">plainText</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference">WisdomQuickResponseContentsPlainTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContents">WisdomQuickResponseContents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `markdown`<sup>Required</sup> <a name="markdown" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.markdown"></a>

```java
public WisdomQuickResponseContentsMarkdownOutputReference getMarkdown();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsMarkdownOutputReference">WisdomQuickResponseContentsMarkdownOutputReference</a>

---

##### `plainText`<sup>Required</sup> <a name="plainText" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.plainText"></a>

```java
public WisdomQuickResponseContentsPlainTextOutputReference getPlainText();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference">WisdomQuickResponseContentsPlainTextOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsOutputReference.property.internalValue"></a>

```java
public WisdomQuickResponseContents getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContents">WisdomQuickResponseContents</a>

---


### WisdomQuickResponseContentsPlainTextOutputReference <a name="WisdomQuickResponseContentsPlainTextOutputReference" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_quick_response.WisdomQuickResponseContentsPlainTextOutputReference;

new WisdomQuickResponseContentsPlainTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainText">WisdomQuickResponseContentsPlainText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainTextOutputReference.property.internalValue"></a>

```java
public WisdomQuickResponseContentsPlainText getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseContentsPlainText">WisdomQuickResponseContentsPlainText</a>

---


### WisdomQuickResponseGroupingConfigurationOutputReference <a name="WisdomQuickResponseGroupingConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_quick_response.WisdomQuickResponseGroupingConfigurationOutputReference;

new WisdomQuickResponseGroupingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resetCriteria">resetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCriteria` <a name="resetCriteria" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resetCriteria"></a>

```java
public void resetCriteria()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.criteriaInput">criteriaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.criteria">criteria</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.criteriaInput"></a>

```java
public java.lang.String getCriteriaInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.criteria"></a>

```java
public java.lang.String getCriteria();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomQuickResponseGroupingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseGroupingConfiguration">WisdomQuickResponseGroupingConfiguration</a>

---


### WisdomQuickResponseTagsList <a name="WisdomQuickResponseTagsList" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_quick_response.WisdomQuickResponseTagsList;

new WisdomQuickResponseTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.get"></a>

```java
public WisdomQuickResponseTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WisdomQuickResponseTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>>

---


### WisdomQuickResponseTagsOutputReference <a name="WisdomQuickResponseTagsOutputReference" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wisdom_quick_response.WisdomQuickResponseTagsOutputReference;

new WisdomQuickResponseTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|WisdomQuickResponseTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomQuickResponse.WisdomQuickResponseTags">WisdomQuickResponseTags</a>

---



